import { languageJsonLoader } from "@components/libraries/JsonLoaders";


/**
 * @returns The content of the page telling the user that we couldn't put in the effort
 */
export default function Unavailable() {
	const load = languageJsonLoader("Unavailable");

	if (!load) {
		return null;
	}

	return(
		<div className="splashScreen">
			<h1 className="splash">{load.title}</h1>
			<p className="splashText">{load.text}</p>
			<button className="button" onClick={() => history.back()}>{load.back}</button>
		</div>
	);
}