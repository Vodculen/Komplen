import { useState, useRef, useCallback } from "react";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { Display } from "./Display";
import { Output } from "./Output";
import { Header } from "./Header";

import "../../Stylesheets/Program.css";

export default function Program({ name, language, program, output = null, displayRun = true, clipboard }) {
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
		if (clipboard) {
			await writeText(clipboard.join('\n'));
		}
	}, [clipboard]);

	return (
		<div className="programBlock">
			<Header language={language} name={name} onCopy={handleCopyClick} onRun={handleRunClick} isRunning={isRunning} showRun={displayRun}/>
			<Display program={program} />
			{showOutput && output && <Output output={output} />}
		</div>
	);
}
