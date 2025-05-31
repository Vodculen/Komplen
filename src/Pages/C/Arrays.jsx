import Title from "../../Components/Page/Title";
import Section from "../../Components/Page/Section";
import SyntaxHighlight from "../../Components/Lexer/SyntaxHighlighter";
import Program from "../../Components/Page/Program";

import ArrayPrograms from "./../../JSON/C/Arrays.json";

export default function CArrays() {
	return(
		<>
			<Title title={"C Arrays"} />
			<Section title={"What's an Array?"} content={WhatsArrays()} />
			<Section title={"Creating Arrays"} content={CreateArray()} />
			<Section title={"Printing Arrays"} content={PrintArray()} />
			<Section title={"Adding Array Elements"} content={CreateArray()} />
			<Section title={"Changing Array Elements"} content={CreateArray()} />
		</>
	);
}

function WhatsArrays() {
	return (
		<>
			<p className="text">With Arrays you can store multiple of the same type of values in one varible.</p>
			
		</>
	);
}	

function CreateArray() {
	return(
		<>
			<p className="text">To define an Array you put <code className="code">[]</code> after the varible name.</p>
			<p className="text">Then on the otherside of the <code className="code">=</code> you put values inbetween <code className="code">&#123; &#125;;</code> seperated by commas.</p>
			<Program program={<SyntaxHighlight input={ArrayPrograms.creatingStructProgram} language="c" />} displayButton={false} />
		</>
	);
}

function PrintArray() {
	return(
		<>
			<p className="text">Printing out an Array Member is simple.</p>
			<p className="text">What you have todo is in the <code className="code">[]</code> you put the index of the member you want to print out.</p>
		</>
	);
}