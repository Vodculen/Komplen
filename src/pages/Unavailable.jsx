import { useEffect, useState } from "react";
import { getLanguage } from "../window/ToggleLanguages";


/**
 * @returns The content of the page telling the user that we couldn't put in the effort
 */
export default function Unavailable() {
	const [currentLang, setCurrentLang] = useState("en");
	const [unavailable, setUnavailable] = useState(null);

	// To get the stored language to set its content to the language and fix all links to match the same language.
	useEffect(() => {
		async function loadContent() {
			const storedLang = await getLanguage();
			const lang = storedLang || "en";
			setCurrentLang(lang);

			try {
				const module = await import(`@data/${lang}/Unavailable.json`);
				setUnavailable(module.default);
			} catch (e) {
				console.error(`Could not load welcome page in "${lang}", falling back to English.`, e);
				const fallback = await import(`@data/en/Unavailable.json`);
				setUnavailable(fallback.default);
			}
		}

		loadContent();
	}, []);

	// Make it show nothing when the page is loading and the user is there as having loading text for a split second looks ugly
	if (!unavailable) {
		return null;
	}

	return(
		<div className="splashScreen">
			<h1 className="splash">{unavailable.title}</h1>
			<p className="splashText">{unavailable.text}</p>
			<button className="button" onClick={() => history.back()}>{unavailable.back}</button>
		</div>
	);
}