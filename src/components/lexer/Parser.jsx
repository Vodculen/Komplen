export default class Parser {
	constructor(lexer) {
		this.tokens = lexer.lexer();
		this.newTokens = [];
		this.language = lexer.language;

		this.current = 0;
	}

	consume() {
		return this.tokens.at(this.current++);
	}

	get() {
		return this.tokens.at(this.current).lexeme;
	}

	peek(amount = 0) {
		return this.tokens.at(this.current + amount).type;
	}

	peekUntil(token) {
		if (!this.eof() && this.peek() !== token) {
			return true;
		}

		return false;
	}

	addStylizedToken(token, type) {
		this.newTokens.push({ type: type, token: token });
	}

	addUnstylizedToken(token) {
		this.addStylizedToken(token, null);
	}

	eof() {
		return this.current >= this.tokens.length;
	}

	parser() {
		return this.language.parser(this);
	}
}
