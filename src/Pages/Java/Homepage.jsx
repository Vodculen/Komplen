import Title from "../../Components/Page/Title";
import Section from "../../Components/Page/Section";
import List from "../../Components/List";
import Program from "../../Components/Page/Program";
import SyntaxHighlight from "../../Components/Lexer/SyntaxHighlighter";

import HomepagePrograms from "./../../JSON/Java/Homepage.json";


export default function JavaHomepage() {
	return(
		<>
			<Title title={"Java Homepage"} />
			<Section title={"Whats Java?"} content={ Section0() } />
			<Section title={"Why Learn Java?"} content={ Section1() } />
			<Section title={"Whats Java Like?"} content={ Section2() } />
		</>
	);
}


/**
 * 
 * ## Whats Java? ?WIP?
 * 
 * When wanting to learn a new programming language, its helpful to know what the language even is.
 * 
 * - Java is a OOP (Object Orintated Program) language like C#.
 * - Java has the JVM (Java Virtual Machine) which allows you to write once run everywhere.
 * - Java is most known being downloaded 3 billion times, look it up!
 * ?Please add more? 
 * 
 */

function Section0() {
	return(
		<>
			<p className="text">When wanting to learn a new programming language, its helpful to know what the language even is.</p>
			<List list={[
				{ text: "Java is a OOP (Object Orintated Program) language like C#.", id: "sec0-list0-item0" },
				{ text: "Java has the JVM (Java Virtual Machine) which allows you to write once run everywhere.", id: "sec0-list0-item1" },
				{ text: "Java is most known being downloaded 3 billion times, look it up!", id: "sec0-list0-item2" }
			]} />
		</>
	);
}


/**
 * 
 * ## Why Learn Java? ?WIP?
 * 
 * Now you know a little bit about Java, you may be woundering about why you should learn Java. why should you?
 * 
 * - Thanks to the JVM it allows you to only write your code and not have it be platform dependent.
 * - Many companies use Java currently and maybe for the forseeable future.
 * - Due to Java being a high level programming language it is easier to write complex programs.
 * ?Please add more? 
 * 
 */
function Section1() {
	return(
		<>
			<p className="text">Now you know a little bit about Java, you may be woundering about why you should learn Java. Why should you?</p>
			<List list={[
				{ text: "Thanks to the JVM it allows you to only write your code and not have it be platform dependent.", id: "sec1-list0-item0" },
				{ text: "Many companies use Java currently and maybe for the forseeable future.", id: "sec1-list0-item1" },
				{ text: "Due to Java being a high level programming language it is easier to write complex programs.", id: "sec1-list0-item2" }
			]} />
		</>
	);
}


/**
 * 
 * ## Whats Java Like? ?WIP?
 * 
 * If your woundering what Java looks like before you begin learning it. Well heres a snippit!
 * 
 * ```
 * Java Main.java
 * 
 * public class Main {
 *     public static void main(String[] args) {
 *         System.out.println("Hello world!");
 *     }
 * }
 * 
 * ```
 * 
 * Now if your looking at this confused out of your mind, don't worry we'll go over it in the next chapter.
 * 
 */

function Section2() {
	return(
		<>
			<p className="text">If your woundering what Java looks like before you begin learning it. Well heres a snippit!</p>
			<Program language="Java" name="Main.java" program={ <SyntaxHighlight input={ HomepagePrograms.trialProgram } language="java" /> } output="Hello world!" displayButton={ true } />
			<p className="text">Now if your looking at this confused out of your mind, don't worry we'll go over it in the next chapter.</p>
		</>
	);
}