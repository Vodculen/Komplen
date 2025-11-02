import Token from "./Token";

export default class Lexer {
	constructor(buffer, language) {
		this.buffer = buffer;
		this.tokens = [];
		this.start = 0;
		this.current = 0;

		this.language = language;
	}


	consume() {
		return this.buffer.charAt(this.current++);
	}

	peek() {
		if (this.eof()) {
			return "\0";
		}

		return this.buffer.charAt(this.current);
	}

	peekPrevious() {
		if (this.current - 1 >= this.buffer.length) {
			return '\0';
		}

		return this.buffer.charAt(this.current - 1);
	}

	peekNext() {
		if (this.current + 1 >= this.buffer.length) {
			return '\0';
		}

		return this.buffer.charAt(this.current + 1);
	}

	match(expected) {
		if (this.eof() || this.buffer.charAt(this.current) !== expected) {
			return false;
		}

		this.current++;

		return true;
	}

	addSimpleToken(type) {
		this.addComplexToken(type, null);
	}

	addComplexToken(type, literal) {
		let token = this.buffer.substring(this.start, this.current);
		this.tokens.push(new Token(type, token, literal));
	}

	string() {
		while (this.peek() !== '\"' && !this.eof()) {
			this.consume();
		}

		this.consume();

		let string = this.buffer.substring(this.start, this.current);
		return string;
	}

	number() {
		while (this.isNum(this.peek())) {
			this.consume();
		}

		if ((this.peek() === '.' || this.peek() === 'e') && this.isNum(this.peekNext())) {
			this.consume();

			while (this.isNum(this.peek())) {
				this.consume();
			}
		}

		let number = this.buffer.substring(this.start, this.current);
		return number;
	}

	identifier() {
		while (this.isAlphaNum(this.peek())) {
			this.consume();
		}

		let identifier = this.buffer.substring(this.start, this.current);
		return identifier;
	}

	// comment(type) {
	// 	if (type === 0) {
	// 		while (this.peek() !== '\n' && !this.eof()) {
	// 			this.consume();
	// 		}
	// 	} else if (type === 1) {
	// 		while (this.peek() !== '*' && this.peekNext() !== '/' && !this.eof()) {
	// 			this.consume();
	// 		}

	// 		this.consume();
	// 		this.consume();
	// 	}

	// 	let comment = this.buffer.substring(this.start, this.current);
	// 	return comment;
	// }


	isAlpha(char) {
		return (char >= 'a' && char <= 'z') ||
           (char >= 'A' && char <= 'Z') ||
            char === '_' || char === '#';
	}

	isNum(char) {
		const code = char.charCodeAt(0);
		return code >= 48 && code <= 57;
	}

  	isAlphaNum(char) {
		return this.isAlpha(char) || this.isNum(char);
	}

	eof() {
		return this.current >= this.buffer.length;
	}

	lexer() {
		return this.language.lexer(this);
	}
}
