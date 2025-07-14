import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import Table from "@components/Helpers/Table";

import * as CTables from "@data/C/Tables.json";


export default function CEscapeCharacters() {
	return(
		<>
			<Title title="C Escape Sequences" />
			<Section title="What are Escape Sequences" content={Section0()} />
		</>
	);
}


function Section0() {
	return(
		<>
			<p className="text">Escape Sequences allow you to format the outputs or check things with text too that aren't characters.</p>
			<p className="text">They can be helpful if you know what they are and do luckily there isn't a lot of them to learn and know.</p>
			<Table table={CTables.escapeSequences} />
		</>
	)
}