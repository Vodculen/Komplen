import { useMemo } from "react";

import Lexer from "./Lexer";
import Parser from "./Parser";

// Language's Config Files
import * as CConfig from "./languages/C";
import * as CppConfig from "./languages/Cpp";
import * as JavaConfig from "./languages/Java";
import Token from "./Token";


const languageConfigs = {
	c: CConfig,
	cpp: CppConfig,
	java: JavaConfig,
};

/**
 * @param {input} input The program's contents @default ""
 * @param {language} language The language's highlighting style @default "c"
 * 
 * @returns Fully highlighted text of the program block
 */
export default function SyntaxHighlight({ input = "", language = "c" }) {
	// This puts together the list of strings in the json file
	const buffer = Array.isArray(input) ? input.join("\n") : input;

	const tokens = useMemo(() => {
		const lang = languageConfigs[language];
		const parser = new Parser(new Lexer(buffer, lang));

		if (!lang) {
			return new Token(type, buffer, buffer);
		} 

		return parser.parser();
	}, [buffer]);

	return (
		<>
			{tokens.map((newTokens, idx) => (
				<span key={idx} className={(newTokens.type || "") + " code"}>
				{newTokens.token}
				</span>
			))}
		</>
	);
}