import Title from "../../Components/Page/Title";
import Section from "../../Components/Page/Section";
import SyntaxHighlight from "../../Components/Lexer/SyntaxHighlighter";
import Program from "../../Components/Page/Program";

import StructPrograms from "./../../JSON/C/Structs.json";


export default function CStructs() {
	return(
		<>
			<Title title={"C Structs"} />
			<Section title={"What's a Struct?"} content={WhatsStruct()} />
			<Section title={"Creating a Struct"} content={CreatingStruct()} />
			<Section title={"Using a Struct"} content={UsingStruct()} />
			<Section title={"String With Structs"} content={StringsStruct()} />
			<Section title={"Simpler Syntax"} content={SimpleStructs()} />
		</>
	);
}

// Please revise content so it isn't an edited W3Schools webpage
function WhatsStruct() {
	return(
		<>
			<p className="text">Structs are a Data Structure that group related variables into a place.</p>
			<p className="text">Unlike an array, a struct may contain many different datatypes.</p>
			<p className="text">The varibles inside the struct are called the struct's members.</p>
		</>
	);
}

function CreatingStruct() {
	return(
		<>
			<p className="text">To declare a struct you simply use the keyword <code className="code keywords">struct</code> followed with the name of the struct.</p>
			<Program name={"structs.c"} language={"C"} program={<SyntaxHighlight input={StructPrograms.creatingStructProgram} />} displayButton={false} />
			<p className="text">All the members have to be defined inbetween the <code className="code">&#123; &#125;;</code>.</p>
		</>
	);
}

function UsingStruct() {
	return(
		<>
			<p className="text">There is two diffrent ways to use structs, both using diffrent syntaxes.</p>
			<p className="text">The first one is where we have to assign the struct's values to varibles.</p>
			<Program name={"grades.c"} language={"C"} program={<SyntaxHighlight input={StructPrograms.standaredStructProgram} />} output={"Current Perentage: 95\nCurrent Letter: A"} />
			<p className="text">The second one is making it an aliase.</p>
			<Program name={"grades.c"} language={"C"} program={<SyntaxHighlight input={StructPrograms.typedefStructProgram} />} output={"Current Perentage: 95\nCurrent Letter: A"} />
		</>
	);
}

function StringsStruct() {
	return(
		<>
			<p className="text">Sadly you can't assign a string to a struct. luckly theres a way around that its just a little more complex.</p>
			<p className="text">The solution... copying are new string into the old string overwriting it, yay!</p>
			<Program name={"structs.c"} language={"C"} program={<SyntaxHighlight input={StructPrograms.stringStructProgram} />} output={"I like cats!"} />
			<p className="text">All the members have to be defined inbetween the <code className="code">&#123; &#125;;</code>.</p>
		</>
	);
}

function SimpleStructs() {
	return(
		<>
			<p className="text">Now if the other ways you could use structs where to much writing your in luck.</p>
			<Program name={"structs.c"} language={"C"} program={<SyntaxHighlight input={StructPrograms.simpleStructProgram} />} output={"Current Perentage: 95\nCurrent Letter: A\nNote: Great job!"} />
			<p className="text">This way is simpler and you don't have to use <code className="code"><span className="methods">strcpy</span>()</code> when using string values!</p>
		</>
	);
}