import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import Program from "@components/Program/Program";
import SyntaxHighlight from "@components/Lexer/SyntaxHighlighter";
import Table from "@components/Helpers/Table";

import * as COutputPrograms from "@data/C/Output.json";
import { escapeSequences } from "@data/C/Tables.json";


export default function CEscapeCharacters() {
	return(
		<>
			<Title title="C Escape Sequences" />
			<Section title="What are Escape Sequences" content={Section0()} />
		</>
	);
}

/**
 * # What are Escape Sequences
 * 
 * Escape Sequences allow you to format the outputs or check things with text too that aren't characters.
 * They can be helpful if you know what they are and do luckily there isn't a lot of them to learn and know.
 * 
 * | Escape Sequences | What it does                                                                         |
 * | \n               | Makes/checks for a new line                                                          |
 * | \t				  | Makes/checks for a tab                                                               |
 * | \\				  | Makes/checks for a forward slash                                                     |
 * | \"				  | Makes/checks for a double-quote                                                      |
 * | \'				  | Makes/checks for a single-quote                                                      |
 * | \v				  | Makes/checks for a vertical tab which is how much a tab is in spaces but in new lines |
 * | \0				  | Makes/checks for the end of a string                                                 |
 */

function Section0() {
	return(
		<>
			<p className="text">Escape Sequences allow you to format the outputs or check things with text too that aren't characters.</p>
			<p className="text">They can be helpful if you know what they are and do luckily there isn't a lot of them to learn and know.</p>
			<Table table={escapeSequences} />
		</>
	)
}