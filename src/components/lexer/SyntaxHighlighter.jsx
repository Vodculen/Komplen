import { useMemo } from "react";
import Lexer from "./Lexer";

// Language's Config Files
import * as CConfig from "./languages/C";
import * as CppConfig from "./languages/Cpp";
import * as JavaConfig from "./languages/Java";


const languageConfigs = {
	c: CConfig,
	cpp: CppConfig,
	java: JavaConfig,
};


/**
 * 
 * @param {input} input The program's contents @default ""
 * @param {language} language The language's highlighting style @default "c"
 * 
 * @returns Fully highlighted text of the program block
 * 
 */
export default function SyntaxHighlight({ input = "", language = "c" }) {
	// This puts together the list of strings in the json file
	const normalizedInput = Array.isArray(input) ? input.join("\n") : input;

	const tokens = useMemo(() => {
		const config = languageConfigs[language];
		const lexer = new Lexer(normalizedInput, config);

		if (!config) {
			return [{ value: normalizedInput, type: null }];
		} 

		return lexer.lex();
	}, [normalizedInput]);

	return (
		<>
			{tokens.map((token, idx) => (
				<span key={idx} className={(token.type || "") + " code"}>
				{token.value}
				</span>
			))}
		</>
	);
}