import * as Constants from "./languages/C";


export function current(lexer) {
	return lexer.input[lexer.index];
}

export function peek(lexer, offset = 1) {
	return lexer.input[lexer.index + offset];
}

export function back(lexer, offset = -1) {
	const idx = lexer.tokens.length + offset;
	return lexer.tokens[idx] || null;
}

export function consume(lexer, amount = 1) {
	lexer.index += amount;
}

export function isAlpha(char) {
	const code = char.charCodeAt(0);
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

export function isDigit(char) {
	const code = char.charCodeAt(0);
	return code >= 48 && code <= 57;
}

export function isAlphanum(char) {
	return isAlpha(char) || isDigit(char);
}

export function eof(lexer) {
	return lexer.index >= lexer.input.length;
}

export function lexIdentifier(lexer) {
	let identifier = current(lexer);
	consume(lexer);

	while (!eof(lexer) && isAlphanum(current(lexer))) {
		identifier += current(lexer);
		consume(lexer);
	}

	if (current(lexer) === "(") {
		return { value: identifier, type: Constants.TokenType.Method };
	}

	let type = Constants.TokenType.Varible;

	if (keywords.includes(identifier)) {
		type = Constants.TokenType.Keyword;
	} else if (back(lexer, -2)?.value === "struct" || back(lexer, -2)?.value === "}") {
		type = Constants.TokenType.Class;
		lexer.knownStructs.add(identifier);
	} else if (lexer.knownStructs.has(identifier)) {
		type = Constants.TokenType.Class;
	}

	return { value: identifier, type };
}

export function lexNumber(lexer) {
	let number = current(lexer);
	consume(lexer);

	while (!eof(lexer) && (isDigit(current(lexer)) || current(lexer) === ".")) {
		number += current(lexer);
		consume(lexer);
	}

	return { value: number, type: Constants.TokenType.Number };
}
