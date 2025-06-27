import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import List from "@components/Helpers/List";
import Program from "@components/Program/Program";
import SyntaxHighlight from "@components/Lexer/SyntaxHighlighter";


import * as CCommentsPrograms from "@data/C/Comments.json";


export default function CComments() {
	return(
		<>
			<Title title="C Comments" />
			<Section title="Single Lined Comments" content={Section0()} />
			<Section title="Multi-Lined Comments" />
			<Section title="Uses of Comments" />
		</>
	);
}

/**
 * # Single Lined Comments
 * 
 * When wanting to document some code or just have the compiler over look it you can use the single lined comments.
 * To create a single lined comment you put // then for the rest of the line it is ignored by the compiler
 * 
 * '''
 * #include <stdio.h>
 * 
 * int main()
 * {
 * 		// This prints out hello world to the screen
 * 		printf("Hello world");
 * 
 * 		return 0;
 * }
 * '''
 */
function Section0() {
	return(
		<>
			<p className="text">When wanting to document some code or just have the compiler over look it you can use the single lined comments.</p>
			<p className="text">To create a single lined comment you put <code className="code comments">//</code> then for the rest of the line it is ignored by the compiler</p>
			<Program name="main.c" language="C" program={<SyntaxHighlight input={CCommentsPrograms.singleLinedComments} language="c" />} output={"Hello world"} clipboard={CCommentsPrograms.singleLinedComments} />
		</>
	);
}