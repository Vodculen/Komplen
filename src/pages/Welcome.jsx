import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "@stylesheets/SplashScreen.css";
import { getLanguage } from "../window/ToggleLanguages";

export default function Welcome() {
	const [currentLang, setCurrentLang] = useState("en");
	const [welcome, setWelcome] = useState(null);

	useEffect(() => {
		async function loadContent() {
			const storedLang = await getLanguage();
			const lang = storedLang || "en";
			setCurrentLang(lang);

			try {
				const module = await import(`@data/${lang}/Welcome.json`);
				setWelcome(module.default);
			} catch (e) {
				console.error(`Could not load welcome page in "${lang}", falling back to English.`, e);
				const fallback = await import(`@data/en/Welcome.json`);
				setWelcome(fallback.default);
			}
		}

		loadContent();
	}, []);

	if (!welcome) return null;

	const link = `/${currentLang}/languages`;

	return (
		<div className="splashScreen">
			<h1 className="splash">{welcome.title}</h1>
			<p className="splashText">{welcome.text}</p>
			<Link to={link}><button className="button">{welcome.continue}</button></Link>
		</div>
	);
}
