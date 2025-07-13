import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import Program from "@components/Program/Program";
import SyntaxHighlight from "@components/Lexer/SyntaxHighlighter";

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

/**
 * # The Printf Function
 * 
 * Printing text out is one of the most important things to learn how to do in C.
 * So let's learn how we can print some text out!
 * 
 * ''' main.c , C
 * 	#include <stdio.h>
 * 
 * 	int main()
 * 	{
 * 		printf("Hello world!");
 * 
 * 		return 0;
 * }
 * '''
 * 
 * To even use the printf function you need to include the <stdio.h> (Standard Input/Output).
 */
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



/**
 * # The Uses of Printf
 * 
 * Fun fact printf stands for print formatted.
 * 
 * By using printf you can not only print out instruction but also help debug codes and give out errors.
 * ''' main.c , C
 * 	#include <stdio.h>
 * 
 * 	int main()
 * 	{
 * 		printf("This program is failing");
 * 
 * 		return 1;
 * }
 * '''
 * 
 * You can also use printf as many times as you want, the only limit is your computer.
 * ''' main.c , C
 * 	#include <stdio.h>
 * 
 * 	int main()
 * 	{
 * 		printf("Hello world! ");
 * 		printf("This is C. ");
 * 		printf("Goodbye computer!");
 * 
 * 		return 0;
 * } /
 * '''
 * 
 * Note all of your text is only on one line, which isn't really useful sometimes. 
 * If you want it on multiple lines you can use \n when you want the text after it on a new line.
 * ''' main.c , C
 * 	#include <stdio.h>
 * 
 * 	int main()
 * 	{
 * 		printf("Hello world!\n");
 * 		printf("This is C.\n");
 * 		printf("Goodbye computer!\n");
 * 
 * 		return 0;
 * }
 * '''
 */
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