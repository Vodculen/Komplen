import React, { useState, useRef } from "react";

import "../../Stylesheets/Program.css"

const ProgramOutput = React.memo(({ output }) => (
	<div className="programOutput">{output}</div>
));

function ShowRun({ displayButton, runProgram, changeRunButton }) {
	if (displayButton) {
		return <button className="runButton" onClick={runProgram}>{changeRunButton ? "Stop" : "Run"}</button>;
	}

	return <button className="runButton" style={{display: "none"}}></button>;
}


export default function Program({ name, language, program, output = null, displayButton = true }) {
	const [showOutput, setShowOutput] = useState(false);
	const [isRunning, setIsRunning] = useState(false);
	const isCooldown = useRef(false);

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
		}, 500); // Cooldown time
	};

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
			{showOutput && (
			<div className="programOutput">
				{output}
			</div>)}
		</div>
	);
}

