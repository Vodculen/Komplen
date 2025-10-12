export default class Token {
	constructor(type, lexeme, literal) {
		this.type = type;
		this.lexeme = lexeme;
		this.literal = literal;
	}

	toString() {
		return `${this.type} ${this.lexeme} ${this.literal}`;
	}
}