import SyntaxHighlight from "../lexer/SyntaxHighlighter";


/**
 * @param {language, input} code What the code in the block should be and what language it should be stylized to
 *  
 * @returns The stylized code block
 */
export default function Code({ code: { language, input }}) {
	return(
		<code className="code">
			<SyntaxHighlight language={language.toLowerCase()} input={input} />
		</code>
	);
}