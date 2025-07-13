import React from "react";
import SyntaxHighlight from "../Lexer/SyntaxHighlighter";

export const Display = React.memo(({ program, language }) => {
	return (
		<div className="program">
			<pre><code>
				<SyntaxHighlight input={program} language={language} />
			</code></pre>
		</div>
	);
});