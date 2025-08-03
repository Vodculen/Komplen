import * as Helpers from "./Helpers";


export default class Lexer {
	constructor(input, languageConfig) {
		this.input = input;
		this.index = 0;
		this.tokens = [];
		this.knownStructs = new Set();

		this.config = languageConfig;
		this.helpers = Helpers;

		if (typeof this.config.lex !== "function") {
			throw new Error("Language config must include a `lex(lexer)` function");
		}

		if (typeof this.config.lexIdentifier !== "function") {
			throw new Error("Language config must include a `lexIdentifier(lexer)` function");
		}

		if (typeof this.config.lexNumber !== "function") {
			throw new Error("Language config must include a `lexNumber(lexer)` function");
		}
	}	

	/**
	 * @param {offset} offset How far ahead you want to peek from the current place @default 1
	 * 
	 * @returns The character at the offset's value ahead
	 */
	peek(offset = 1) {
		return this.input[this.index + offset];
	}

	/**
	 * @returns The logic & style for an Identifier
	 */
	lexIdentifier() {
		return this.config.lexIdentifier(this);
	}

	/**
	 * @returns The logic & style for a Number
	 */
	lexNumber() {
		return this.config.lexNumber(this);
	}

	/**
	 * @returns The logic & style for diffrent Tokens
	 */
	lex() {
		return this.config.lex(this);
	}
}
