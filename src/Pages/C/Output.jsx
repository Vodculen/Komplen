import Title from "@components/Page/Title";
import Section from "@components/Page/Section";
import Program from "@components/Program/Program";
import SyntaxHighlight from "@components/Lexer/SyntaxHighlighter";

import * as COutputPrograms from "@data/C/COutput.json";
import Boxes from "@components/Page/Boxes";


export default function COutput() {
	return(
		<>
			<Title title="C Output" />
			<Section title="The Printf Function" content={Section0()} />
			<Section title="The Uses of Printf" content={Section1()} />
			<Section title="The Mistakes of Using Printf" content={Section2()} />
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
			<Program name="main.c" language="C" program={<SyntaxHighlight input={COutputPrograms.normalPrintf} language="c" />} output="Hello world!" clipboard={COutputPrograms.normalPrintf} />
			<p className="text">To even use the <code className="code"><span className="methods">printf</span>()</code> function, you need to include the <code className="code strings">&lt;stdio.h&gt;</code> (Standard Input/Output)</p>
		</>
	);
}



/**
 * # The Uses of Printf
 * 
 * Fun fact printf stands for print formated.
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
			<Boxes title="Fun Fact" content={<p className="text whiten"><code className="code whiten">printf()</code> stands for print formatted.</p>} mode="info" />
			
			<p className="text">By using <code className="code"><span className="methods">printf</span>()</code> you can not only print out instructions but also help debug code and give errors.</p>
			<Program name="main.c" language="C" program={<SyntaxHighlight input={COutputPrograms.errorPrintf} language="c" />} output={"This program is failing"} clipboard={COutputPrograms.errorPrintf} />
			<p className="text">You can also use <code className="code"><span className="methods">printf</span>()</code> as many times as you want, the only limit is your computer.</p>
			<Program name="main.c" language="C" program={<SyntaxHighlight input={COutputPrograms.multiplePrintfs} language="c" />} output={"Hello world! This is C. Goodbye computer!"} clipboard={COutputPrograms.multiplePrintfs} />
		</>
	);
}


/**
 * # The Mistakes of Using Printf
 * 
 * Using the printf function is pretty easy and simple to use.
 * But there're some wrong ways to use printf.
 * 
 * First, forgetting the "":
 * ''' main.c , C
 * 	#include <stdio.h>
 * 
 * 	int main()
 * 	{
 * 		printf(Hello world!);
 * 
 * 		return 0;
 * }
 * '''
 * This will give you an error as C thinks your printing undefined varibles wrong.
 * 
 * Second, using print instead of printf:
 * ''' main.c , C
 * 	#include <stdio.h>
 * 
 * 	int main()
 * 	{
 * 		print("Hello world!");
 * 
 * 		return 0;
 * }
 * '''
 * This will again give you an error as that is not a function in the <stdio.h> library.
 * 
 * Lastly, not using the <stdio.h> library:
 * ''' main.c , C
 * 	int main()
 * 	{
 * 		print("Hello world!");
 * 
 * 		return 0;
 * }
 * '''
 * This will again give you an error as the function is declared no where else other than the <stdio.h> library.
 * Note you can create a function like printf but it isn't the same as the printf in the <stdio.h> library.
 */
function Section2() {
	return(
		<>
			<p className="text">Using the <code className="code"><span className="methods">printf</span>()</code> function is pretty easy and simple to use.</p>
			<p className="text">But there're some wrong ways to use <code className="code"><span className="methods">printf</span>()</code>.</p>
			<Boxes title={"Error"} content={Error0()} mode="error" />
			<Boxes title={"Error"} content={Error1()} mode="error" />
		</>
	);
}

function Error0() {
	return(
		<>
			<p className="text whiten">Forgetting the <code className="code whiten">""</code>:</p>
			<Program name="main.c" language="C" program={<SyntaxHighlight input={COutputPrograms.noQuotesPrintf} language="c" />} output={"Please put \'Hello world!\' in \"\" : This is an unoffical GCC error for educational purposes"} clipboard={COutputPrograms.noQuotesPrintf} />
			<p className="text whiten">This will give you an error as C thinks your printing undefined varibles wrong.</p>
		</>
	);
}

function Error1() {
	return(
		<>
			<p className="text whiten">Using <code className="code whiten">print()</code> instead of <code className="code whiten">printf</code>:</p>
			<Program name="main.c" language="C" program={<SyntaxHighlight input={COutputPrograms.misspeltPrintf} language="c" />} output={"implicit declaration of function \‘print\’; did you mean \‘printf\’?"} clipboard={COutputPrograms.misspeltPrintf} />
			<p className="text whiten">This will again give you an error as that is not a function in the <code className="code whiten">&lt;stdio.h&gt;</code> library.</p>
		</>
	);
}