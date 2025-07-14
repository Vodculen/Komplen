import { useState, useRef, useCallback } from "react";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import SyntaxHighlight from "../Lexer/SyntaxHighlighter";

import "../../Stylesheets/Program.css";

export default function Program({ name, language, program, output = null, displayRun = true }) {
	const [showOutput, setShowOutput] = useState(false);
	const [isRunning, setIsRunning] = useState(false);
	const isCooldown = useRef(false);

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

	const handleCopyClick = useCallback(async () => {
		if (program) {
			await writeText(program.join('\n'));
		}
	}, [program]);

	return (
		<div className="programBlock">
			<Header language={language} name={name} onCopy={handleCopyClick} onRun={handleRunClick} isRunning={isRunning} showRun={displayRun}/>
			<Display program={program} language={language.toLowerCase()} />
			{showOutput && output && <Output output={output} />}
		</div>
	);
}

function Output({ output }) {
	return (
		<div className="programOutput">
			{output}
		</div>
	);
}

function Display({ program, language }) {
	return (
		<div className="program">
			<pre><code>
				<SyntaxHighlight input={program} language={language} />
			</code></pre>
		</div>
	);
}

const ShowRun = ({ display, onClick, isRunning }) => {
	if (!display) return null;

	return (
		<button className={isRunning ? "stopping" : "running"} onClick={onClick}>
			{isRunning ? "Stop" : "Run"}
		</button>
	);
}

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