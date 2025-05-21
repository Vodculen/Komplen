import Menu from "../../Components/Menu";
import CSidebar from "../../Components/Sidebars/CSidebar";
import Title from "../../Components/Title";
import Section from "../../Components/Section";
import List from "../../Components/List";
import Program from "../../Components/Program";

import "./../../Stylesheets/SplashScreen.css"


export default function CHomepage() {
	return(
		<>
			<Menu />
			<div className="page">
				<CSidebar />
				<div className="content">
					<Title title={"C Homepage"} />
					<Section title={"What Even is C?"} content={WhatsC()} />
					<Section title={"Should You Learn C?"} content={LearnC()} />
					<Section title={"C Program"} content={LearnC()} />
					<Section title={"C Program"} content={CExample()} />
				</div>
			</div>
		</>
	);
}

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
			<code>#include &lt;stdlib.h&gt;</code><br /><br />
			<code>int main() &#123;</code><br />
			<code>    printf("Hello world");</code><br />
			<br />
			<code>    return 0;</code><br />
			<code>&#125;</code>
		</>
	);
}