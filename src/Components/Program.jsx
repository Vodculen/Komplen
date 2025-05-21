export default function Program({ name, language, program }) {
	return (
		<div className="programBlock">
			<ul className="programPanel">
				<li><p className="filename item">{name}</p></li>
				<li><p className="lang item">{language}</p></li>
				<li><button className="run">Run</button></li>
				<li><button>Copy</button></li>
			</ul>

			<div className="program">
				<pre>
					{program}
				</pre>
			</div>
		</div>
	);
}