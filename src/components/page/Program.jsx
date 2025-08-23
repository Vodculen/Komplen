import { useState, useRef, useCallback } from "react";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";

import SyntaxHighlight from "../lexer/SyntaxHighlighter";

import "@stylesheets/Program.css";


/**
 * @param {language, name, program, output, runnable} program The fields that customize all the program's content
 * 
 * @returns The program all stylized and with the customizations 
 */
export default function Program({ program: { language, name, program, output, runnable }}) {
	const [showOutput, setShowOutput] = useState(false);
	const [isRunning, setIsRunning] = useState(false);
	const isCooldown = useRef(false);

	// Prevents the user from spamming the buttons causing the software to crash
	const handleRunClick = useCallback(() => {
		if (isCooldown.current) {
			return;
		}

		isCooldown.current = true;

		setShowOutput(prev => !prev);
		setIsRunning(prev => !prev);

		setTimeout(() => {
			isCooldown.current = false;
		}, 500);
	}, []);

	// To keep the codes form
	const handleCopyClick = useCallback(async () => {
		if (program) {
			await writeText(program.join('\n'));
		}
	}, [program]);

	return (
		<div className="programBlock">
			<Header language={language} name={name} onCopy={handleCopyClick} onRun={handleRunClick} isRunning={isRunning} showRun={runnable}/>
			<Display program={program} language={language.toLowerCase()} />
			{showOutput && output && <Output output={output} />}
		</div>
	);
}

/**
 * @param {output} output The text that the program will return when running
 * 
 * @returns The text that the program outputs
 */
function Output({ output }) {
	return (
		<div className="programOutput">
			{output}
		</div>
	);
}

/**
 * @param {program} program The text of the program that is going to be stylized
 * @param {language} language The language that you want the program to be stylized as (Note: purely the color of the text) 
 * 
 * @returns A fully stylized block of code
 */
function Display({ program, language }) {
	return (
		<div className="program">
			<pre><code>
				<SyntaxHighlight input={program} language={language} />
			</code></pre>
		</div>
	);
}

/**
 * @param {display} display To show the run button or not
 * @param {onClick} onClick To change the run button's style based of if its clicked or not
 * @param {isRunning} isRunning To change the run button's style based of if its running or not
 * 
 * @returns The run button's style
 */
const ShowRun = ({ display, onClick, isRunning }) => {
	if (!display) return null;

	return (
		<button className={isRunning ? "stopping" : "running"} onClick={onClick}>
			{isRunning ? "Stop" : "Run"}
		</button>
	);
}

/**
 * @param {language} language The display language of the program
 * @param {name} name The display name of the program
 * @param {onCopy} onCopy To see if the user hit the copy button 
 * @param {onRun} onRun To see if the user hit the run button 
 * @param {isRunning} isRunning To see if its running to show a change in the run button
 * @param {showRun} showRun (Default: True) If the program should be runnable by hiding/showing the run button
 * 
 * @returns The fully formatted header for the program
 */
function Header({ language, name, onCopy, onRun, isRunning, showRun = true }) {
	return (
		<div className="programHeader">
			<div className="programInfo">
				<p className="programLanguage">{language}</p>
				<p className="programName">{name}</p>
			</div>
			<div className="buttonGroup">
				<button className="copying" onClick={onCopy}>Copy</button>
				<ShowRun display={showRun} onClick={onRun} isRunning={isRunning} />
			</div>
		</div>
	);
}