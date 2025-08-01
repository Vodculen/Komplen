export const operators = new Set(["=", "!", "<", ">", "+", "-", "/", "*", "^", "|", "&"]);
export const blank = new Set(["(", ")", "{", "}", ";", ".", ",", "[", "]"]);

export const keywords = [
	"auto", "break", "case", "char", "const", "continue", "default",
	"do", "double", "else", "enum", "extern", "float", "for", "goto",
	"if", "int", "long", "register", "return", "short", "signed",
	"sizeof", "static", "struct", "switch", "typedef", "union", "void",
	"unsigned", "volatile", "while"
];

export const TokenType = {
	Variable: "keywords",
	Keyword: "keywords",
	Number: "numbers",
	Class: "classes",
	Method: "methods",
	String: "strings",
	Operator: "operators",
	Comment: "comments",
	Misc: ""
};

export function lex(lexer) {
	const { helpers } = lexer;
	
	while (lexer.index < lexer.input.length) {
		const char = helpers.current(lexer);

		// Line comment
		if (char === "/" && lexer.peek() === "/") {
			helpers.readUntil(lexer, "\n", {
				includeTerminator: false,
				tokenType: lexer.config.TokenType.Comment,
			});
			continue;
		}

		// String or char literal
		if (char === '"' || char === "'") {
			helpers.consume(lexer); // opening quote
			lexer.tokens.push({ value: char, type: lexer.config.TokenType.String });
			helpers.readUntil(lexer, char, {
				handleEscapes: true,
				handleFormatSpec: true,
				splitTokens: true,
				tokenType: lexer.config.TokenType.String,
				includeTerminator: false,
			});
			lexer.tokens.push({ value: char, type: lexer.config.TokenType.String });
			continue;
		}

		if (lexer.config.blank.has(char)) {
			lexer.tokens.push({ value: char, type: lexer.config.TokenType.Misc });
			helpers.consume(lexer);
			continue;
		}

		if (char === "<") {
			helpers.readUntil(lexer, ">", { tokenType: lexer.config.TokenType.String });
			continue;
		}

		if (lexer.config.operators.has(char)) {
			lexer.tokens.push({ value: char, type: lexer.config.TokenType.Operator });
			helpers.consume(lexer);
			continue;
		}

		if (char === "#") {
			helpers.readUntil(lexer, " ", { tokenType: lexer.config.TokenType.Keyword });
			continue;
		}

		if (helpers.isAlpha(char)) {
			lexer.tokens.push(lexer.lexIdentifier());
			continue;
		}

		if (helpers.isDigit(char)) {
			lexer.tokens.push(lexer.lexNumber());
			continue;
		}

		// Unknown character
		lexer.tokens.push({ value: char, type: null });
		helpers.consume(lexer);
	}

	return lexer.tokens;
}

export function lexIdentifier(lexer) {
	const { helpers, config } = lexer;
	let identifier = helpers.current(lexer);
	helpers.consume(lexer);

	while (lexer.index < lexer.input.length && helpers.isAlphanum(helpers.current(lexer))) {
		identifier += helpers.current(lexer);
		helpers.consume(lexer);
	}

	if (helpers.current(lexer) === "(") {
		return { value: identifier, type: config.TokenType.Method };
	}

	let type = config.TokenType.Variable;

	if (config.keywords.includes(identifier)) {
		type = config.TokenType.Variable;
	} else if (helpers.back(lexer, -2)?.value === "struct" || helpers.back(lexer, -2)?.value === "}") {
		type = config.TokenType.Class;
		lexer.knownStructs.add(identifier);
	} else if (lexer.knownStructs.has(identifier)) {
		type = config.TokenType.Class;
	}

	return { value: identifier, type };
}

export function lexNumber(lexer) {
	const { helpers } = lexer;
	let number = helpers.current(lexer);
	helpers.consume(lexer);

	while (
		lexer.index < lexer.input.length &&
		(helpers.isDigit(helpers.current(lexer)) || helpers.current(lexer) === ".")
	) {
		number += helpers.current(lexer);
		helpers.consume(lexer);
	}

	return { value: number, type: lexer.config.TokenType.Number };
}