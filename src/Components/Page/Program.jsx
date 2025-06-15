import { useState, useRef } from "react";

import "@stylesheets/Program.css"


/**
 * 
 * @param {runProgram} runProgram This dictates wether to show the output.
 * @param {displayButton} displayButton This dictates wether the run button should be showed or not.
 * @param {changeRunButton} changeRunButton This dictates wether the run but either displays "Run" or "Stop".
 * 
 * @returns The run button with all the modifications given through the paremeters.
 *  
 */
function ShowRun({ displayButton, runProgram, changeRunButton }) {
	if (displayButton) {
		return <button className="runButton" onClick={runProgram}>{changeRunButton ? "Stop" : "Run"}</button>;
	}

	return <button className="runButton" style={{display: "none"}}></button>;
}


/**
 * 
 * Yes there are so many fucking parameters.
 * @param {name} name The name of the program, also add the file extention to the name as well.
 * @param {language} language The language the program is written in.
 * @param {program} program The program itself.
 * @param {output} output The text the program will output when ran. @default null
 * @param {displayButton} displayButton Wether the run button should be displayed or not. @default true 
 * 
 * @returns The program block with all the content.
 * 
 */
export default function Program({ name, language, program, output = null, displayButton = true }) {
	const [showOutput, setShowOutput] = useState(false);
	const [isRunning, setIsRunning] = useState(false);
	const isCooldown = useRef(false);

	// This is all the logic for the run button
	const handleRunClick = () => {
		if (isCooldown.current) return;

		isCooldown.current = true;

		if (isRunning) {
			setShowOutput(false);
			setIsRunning(false);
		} else {
			setShowOutput(true);
			setIsRunning(true);
		}

		setTimeout(() => {
			isCooldown.current = false;
		}, 500);
	};

	// This looks liks shit but it actually works
	return (
		<div className="programBlock">
			<div className="programHeader">
				<div className="programInfo">
					<p className="programLanguage">{language}</p>
					<p className="programName">{name}</p>
				</div>
				<div className="buttonGroup">
					<button className="copyButton">Copy</button>
					<ShowRun displayButton={displayButton} runProgram={handleRunClick} changeRunButton={isRunning} />
				</div>
			</div>
			<div className="program">
				<pre>{program}</pre>
			</div>
			{showOutput && (<div className="programOutput"> {output} </div>)}
		</div>
	);
}

