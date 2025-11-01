import { Link } from "react-router-dom";

import "@stylesheets/SplashScreen.css";
import { languageJsonLoader } from "@components/libraries/JsonLoaders";

/**
 * @returns The page that the user will first see
 */
export default function Welcome() {
	const load = languageJsonLoader("Welcome");

	if (!load) {
		return null;
	}

	return (
		<div className="splashScreen">
			<h1 className="splash">{load.title}</h1>
			<p className="splashText">{load.text}</p>
			<Link to={load.link}><button className="button">{load.continue}</button></Link>
		</div>
	);
}
