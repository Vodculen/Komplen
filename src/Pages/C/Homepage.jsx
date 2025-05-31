import Title from "../../Components/Page/Title";
import Section from "../../Components/Page/Section";
import List from "../../Components/List";
import Program from "../../Components/Page/Program";
import SyntaxHighlight from "../../Components/Lexer/SyntaxHighlighter";


export default function CHomepage() {
	return(
		<>
			<Title title={"C Homepage"} />
			<Section title={"What Even is C?"} content={WhatsC()} />
			<Section title={"Should You Learn C?"} content={LearnC()} />
			<Section title={"C Program"} content={LearnC()} />
			<Section title={"C Program"} content={CExample()} />
		</>
	);
}
// Move this to another file with all this page's programs on it
const exampleProgram = `#include <stdlib.h>

int main() {
	printf("Hello world"); //Hallo \n
	return 0;
}`;


// Please revise content so it isn't an edited W3Schools webpage
function WhatsC() {
	return(
		<>
			<List list={[
				{text: "C is a general-purpose programming language", id: "list0-point0"},
				{text: "C was developed by Dennis Ritchie at Bell Labortories in 1972", id: "list0-point1"},
				{text: "C is a popular programming language in Computer Science", id: "list0-point2"},
				{text: "C is used in all UNIX based opperating systems", id: "list0-point3"}
			]} />
		</>
	);
}

function LearnC() {
	return(
		<>
			<List list={[
				{text: "C is one of the most used and known programming languages in the world", id: "list1-point0"},
				{text: "C is one of the fastest programming languages you can write human readable code in", id: "list1-point1"},
				{text: "C can be used to write both software and technology", id: "list1-point2"},
				{text: "Knowing C, can make it no problem learning other languages like C++, C#, etc.", id: "list1-point3"}
			]} />
		</>
	);
}

function CExample() {
	return(
		<>
			<Program name={"main.c"} language={"C"} program={CExampleProgram()} />
		</>
	);
}

function CExampleProgram() {
	return(
		<>
			<SyntaxHighlight input={exampleProgram} />
		</>
	);
}