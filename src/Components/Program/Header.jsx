import React from "react";

const ShowRun = ({ display, onClick, isRunning }) => {
	if (!display) return null;

	return (
		<button className={isRunning ? "stopping" : "running"} onClick={onClick}>
			{isRunning ? "Stop" : "Run"}
		</button>
	);
};

export const Header = React.memo(({ language, name, onCopy, onRun, isRunning, showRun = true }) => {
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
});
