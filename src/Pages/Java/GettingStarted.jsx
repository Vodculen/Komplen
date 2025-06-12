import Title from "../../Components/Page/Title";
import Section from "../../Components/Page/Section";
import List from "../../Components/List";
import Program from "../../Components/Page/Program";
import SyntaxHighlight from "../../Components/Lexer/SyntaxHighlighter";
import Terminal from "../../Components/Page/Terminal";
import Spacer from "../../Components/Page/Spacer";




export default function JavaGettingStarted() {
	
	return(
		<>
			<Title title={"Java Getting Started"} />
			<Section title={"Required Installations"} content={Section0()} />
			<Section title={"Installing VS Code"} content={Section1()} />
			<Section title={"Installing Java"} content={Section2()} />
		</>
	);
}

/**
 * 
 * ## Required Installations ?WIP?
 * 
 * When writing and running your Java program you need some tools to do that.
 * 
 * Some of the tools you need are:
 * - An IDE to write the program and help you out. We'll be useing VS Code.
 * - A compiler for the language so it can be runnable. We'll use the Javac compiler.
 * 
 * Now that we know what we'll be useing lets install them!
 * 
 * To install VS Code go to their website and find the download for your Operating System.
 * Then install and run the VS Code.
 * 
 * Many computers may already have the Java installed by default, you can see if so by running.
 * |
 *  $ java -version
 * |
 * If it show nothing or says you need to install it, then you can install Java by going to your terminal and running.
 * 
 * |
 * 	$ sudo apt install openjdk-21-jdk
 * |
 * 
 */

function Section0() {
	return(
		<>
			<p className="text">When writing and running your Java program you need some tools to do that.</p>
			<p className="text">Some of the tools you'll need are:</p>
			<List list={[
				{ text: "An IDE to write the program and help you out. We'll be useing VS Code.", id: "sec0-list0-item0" },
				{ text: "A compiler for the language so it can be runnable. We'll use the Javac compiler.", id: "sec0-list0-item1"}
			]} />
			<p className="text">Now that we know what we'll be useing lets install them!</p>
		</>
	);
}

function Section1() {
	return(
		<>
			<p className="text">To install VS Code go to their website and find the download for your Operating System.</p>
			<img className="image" src="../src/Assets/VSDownloadDark.png" alt="Downloading VSCode" />
			<p className="text">Then install and run the VS Code.</p>
		</>
	);
}

function Section2() {
	return(
		<>
			<p className="text">Many computers may already have the Java installed by default, you can see if so by running.</p>
			<Terminal input={"$ java -version"} />
			<p className="text">If it show nothing or says you need to install it, then you can install Java by going to your terminal and running.</p>
			<Terminal input={"$ sudo apt install openjdk-21-jdk"} />
		</>
	);
}