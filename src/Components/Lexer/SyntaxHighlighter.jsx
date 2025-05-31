import { useMemo } from "react";
import Lexer from "./Lexer";

// Language's Config Files
import * as CConfig from "./Languages/C";
import * as CppConfig from "./Languages/Cpp";

const languageConfigs = {
	c: CConfig,
	cpp: CppConfig,
};

export default function SyntaxHighlight({ input = "", language = "c" }) {
	const tokens = useMemo(() => {
		const config = languageConfigs[language];
		if (!config) return [{ value: input, type: null }]; // fallback
		const lexer = new Lexer(input, config);
		return lexer.lex();
	}, [input]);

	return (
		<pre>
			<code>
				{tokens.map((token, idx) => (
					<span key={idx} className={token.type || ""}>
						{token.value}
					</span>
				))}
			</code>
		</pre>
	);
}