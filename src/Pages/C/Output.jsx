import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import Program from "@components/Page/Program";

import * as COutputPrograms from "@data/C/Output.json";
import Code from "../../Components/Page/Code";


export default function COutput() {
	return(
		<>
			<Title title="C Output" />
			<Section title="The Printf Function" content={Section0()} />
			<Section title="The Uses of Printf" content={Section1()} />
		</>
	);
}


function Section0() {
	return(
		<>
			<p className="text">Printing text out is one of the most important things to learn how to do in C.</p>
			<p className="text">So let's learn how we can print some text out!</p>
			<Program name="main.c" language="C" program={COutputPrograms.normalPrintf} output="Hello world!" />
			<p className="text">To even use the <Code input="printf()" language="C" /> function, you need to include the <Code input="<stdio.h>" language="C" /> (Standard Input/Output)</p>
		</>
	);
}


function Section1() {
	return(
		<>
			<p className="text">Fun fact <Code input="printf()" language="C" /> stands for print formatted.</p>
			<p className="text">By using <Code input="printf()" language="C" /> you can not only print out instructions but also help debug code and give errors.</p>
			<Program name="main.c" language="C" program={COutputPrograms.errorPrintf} output={"This program is failing"} />
			<p className="text">You can also use <code className="code"><span className="methods">printf</span>()</code> as many times as you want, the only limit is your computer.</p>
			<Program name="main.c" language="C" program={COutputPrograms.multiplePrintfs} output={"Hello world! This is C. Goodbye computer!"} />
		</>
	);
}