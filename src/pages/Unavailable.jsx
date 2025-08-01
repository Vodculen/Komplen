import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * 
 * @returns The content of the page telling the user that we couldn't put in the effort
 * 
 */
export default function Unavailable() {
	const location = useLocation();
	const currentLang = location.pathname.split("/")[1] || "en";
	const [unavailable, setUnavailable] = useState({});

	useEffect(() => {
		async function loadLanguages() {
			try {
				const module = await import(`@data/${currentLang}/Unavailable.json`);

				setUnavailable(module.default);
			} catch (e) {
				const module = await import(`@data/en/Unavailable.json`);

				console.error("Could not load Unavailable page, falling back to English.", e);
				
				setUnavailable(module.default);
			}
		}

		loadLanguages();
	}, [currentLang]);

	if (!unavailable.title) {
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