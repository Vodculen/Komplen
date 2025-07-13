import SyntaxHighlight from "../Lexer/SyntaxHighlighter";

export default function Code({ input, language }) {
	return(
		<code className="code">
			<SyntaxHighlight language={language.toLowerCase()} input={input} />
		</code>
	);
}