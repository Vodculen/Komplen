import SyntaxHighlight from "../lexer/SyntaxHighlighter";

export default function Code({ codeBlock: { language, input }}) {
	return(
		<code className="code">
			<SyntaxHighlight language={language.toLowerCase()} input={input} />
		</code>
	);
}