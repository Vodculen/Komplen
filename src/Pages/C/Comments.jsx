import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import Program from "@components/Page/Program";

import * as CCommentsPrograms from "@data/C/Comments.json";


export default function CComments() {
	return(
		<>
			<Title title="C Comments" />
			<Section title="Single Lined Comments" content={Section0()} />
			<Section title="Multi-Lined Comments" content={Section1()} />
			<Section title="Uses of Comments" />
		</>
	);
}


function Section0() {
	return(
		<>
			<p className="text">When wanting to document some code or just have the compiler over look it you can use the single lined comments.</p>
			<p className="text">To create a single lined comment you put <code className="code comments">//</code> then for the rest of the line it is ignored by the compiler</p>
			<Program name="main.c" language="C" program={CCommentsPrograms.singleLinedComments} output={"Hello world"} clipboard={CCommentsPrograms.singleLinedComments} />
		</>
	);
}


function Section1() {
	return(
		<>
			<p className="text">When wanting to write comments that don't really fit on one line or documenting a large piece of code.</p>
			<p className="text">To use multi-lined comments start by putting <code className="code comments">/*</code> and your compiler will ignore anything you write until you have to put <code className="code comments">*/</code>.</p>
			<Program name="main.c" language="C" program={CCommentsPrograms.multilinedComments} output={"Hello world"} clipboard={CCommentsPrograms.singleLinedComments} />
		</>
	);
}