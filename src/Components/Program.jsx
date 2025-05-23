import "../Stylesheets/Program.css"


export default function Program({ name, language, program }) {
	return (
		<div className="programBlock">
			<div className="programHeader">
				<div className="programInfo">
					<p className="programLanguage">{language}</p>
					<p className="programName">{name}</p>
				</div>
				<div className="buttonGroup">
					<button className="copyButton">Copy</button>
					{/* <button className="runButton">Run</button> We need to make backend compiler but I dont want to now Hah */}
				</div>
			</div>
			<div className="program">
				<pre>{program}</pre>
			</div>
		</div>
	);
}