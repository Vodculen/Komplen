const Tokens = {
	// Brackets
	LEFT_PAREN: "Left Parentheses",
	RIGHT_PAREN: "Right Parentheses",
	LEFT_CURLY: "Left Curly Bracket",
	RIGHT_CURLY: "Right Curly Bracket",
	LEFT_SQUARE: "Left Square Bracket",
	RIGHT_SQUARE: "Right Square Bracket",

	// Operators
	NOT: "Not",
	NOT_EQUAL: "Not Equal",
	EQUAL: "Equals",
	DOUBLE_EQUAL: "Double Equal",
	LESS_THAN: "Less Than",
	LESS_THAN_EQUAL: "Less Than or Equal to",
	GREATER_THAN: "Greater Than",
	GREATER_THAN_EQUAL: "Greater Than or Equal to",

	// Math Symbols
	DIVIDE: "Divide",

	// Literals
	STRING_LITERAL: "String Literal",
	NUMBER_LITERAL: "Number Literal",

	// Keywords
	INCLUDE: "Include",
	INTEGER: "Integer",

	// Escape Characters
	NEW_LINE: "New Line",
	VISUAL_NEW_LINE: "\\n",
	DOT: "Dot",
	COMMA: "Comma",

	IDENTIFIER: "Identifier",
	COMMENT: "Comment",
	SEMICOLON: "Semicolon",
	WHITESPACE: " ",
};

const Keywords = new Map([
	["#include", Tokens.INCLUDE],
	["int", Tokens.KEYWORD],
	["char", Tokens.KEYWORD],
	["const", Tokens.KEYWORD],
	["return", Tokens.KEYWORD]
]);

export function lexer(lexer) {
	while (!lexer.eof()) {
		lexer.start = lexer.current;
		lexTokens(lexer);
	}

	return lexer.tokens;
}

function lexTokens(lexer) {
	let c = lexer.consume();

	switch (c) {
		case ' ': lexer.addSimpleToken(Tokens.WHITESPACE); break;
		case '\n': lexer.addSimpleToken(Tokens.NEW_LINE); break;
		case '(': lexer.addSimpleToken(Tokens.LEFT_PAREN); break;
		case ')': lexer.addSimpleToken(Tokens.RIGHT_PAREN); break;
		case '{': lexer.addSimpleToken(Tokens.LEFT_CURLY); break;
		case '}': lexer.addSimpleToken(Tokens.RIGHT_CURLY); break;
		case '[': lexer.addSimpleToken(Tokens.LEFT_SQUARE); break;
		case ']': lexer.addSimpleToken(Tokens.RIGHT_SQUARE); break;
		case ';': lexer.addSimpleToken(Tokens.SEMICOLON); break;
		case '!': lexer.addSimpleToken(lexer.match('=') ? Tokens.NOT_EQUAL : Tokens.NOT); break;
		case '=': lexer.addSimpleToken(lexer.match('=') ? Tokens.DOUBLE_EQUAL : Tokens.EQUAL); break;
		case '<': lexer.addSimpleToken(lexer.match('=') ? Tokens.LESS_THAN_EQUAL : Tokens.LESS_THAN); break;
		case '>': lexer.addSimpleToken(lexer.match('=') ? Tokens.GREATER_THAN_EQUAL : Tokens.GREATER_THAN); break;
		case '/':
			if (lexer.match('/')) {
				lexer.addComplexToken(Tokens.COMMENT, lexer.comment(0));
				break;
			} else if (lexer.match('*')) {
				lexer.addComplexToken(Tokens.COMMENT, lexer.comment(1));
				break;
			}

			lexer.addSimpleToken(Tokens.DIVIDE);
			break;
		case '\\':
			if (lexer.match('n')) {
				lexer.addSimpleToken(Tokens.VISUAL_NEW_LINE);
				break;
			}
			break;
		case '\"': lexer.addComplexToken(Tokens.STRING_LITERAL, lexer.string()); break;
		case '.': lexer.addSimpleToken(Tokens.DOT); break;
		case ',': lexer.addSimpleToken(Tokens.COMMA); break;
	
		default:
			if (lexer.isNum(c)) {
				lexer.addComplexToken(Tokens.NUMBER_LITERAL, lexer.number());
			} else if (lexer.isAlpha(c)) {
				lexer.addComplexToken(Keywords.has(lexer.identifier()) ? Keywords.get(lexer.identifier()) : Tokens.IDENTIFIER, lexer.identifier());
			}

			break;
	}
}

export function parser(parser) {
	while (!parser.eof()) {
		parseTokens(parser);
	}

	return parser.newTokens;
}

function parseTokens(parser) {
	const token = parser.consume();
	const c = token.type;

	switch (c) {
		case Tokens.VISUAL_NEW_LINE: parser.addStylizedToken(token.lexeme, "operators"); break;
		case Tokens.COMMENT: parser.addStylizedToken(token.lexeme, "comments"); break;
		case Tokens.NUMBER_LITERAL: parser.addStylizedToken(token.lexeme, "numbers"); break;
		case Tokens.STRING_LITERAL: parser.addStylizedToken(token.lexeme, "strings"); break;
		case Tokens.IDENTIFIER:
			if (parser.peek() === Tokens.LEFT_PAREN) {
				parser.addStylizedToken(token.lexeme, "methods");
			} else {
				parser.addStylizedToken(token.lexeme, "variables");
			}

			break;
		case Tokens.INCLUDE:
			parser.addStylizedToken(token.lexeme, "keywords");

			while (parser.peek() !== Tokens.NEW_LINE && !parser.eof()) {
				const nextToken = parser.consume();

				parser.addStylizedToken(nextToken.lexeme, "strings");
			}

			break;
		case Tokens.KEYWORD: parser.addStylizedToken(token.lexeme, "keywords"); break;
		default:
			// For all un-stylized tokens
			parser.addUnstylizedToken(token.lexeme);

			break;
	}
}


