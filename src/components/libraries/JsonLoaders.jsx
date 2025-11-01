import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLanguage } from "../../window/ToggleLanguages";

export function defaultJsonLoader(jsonFile) {
	const location = useLocation();
	const [jsonData, getJsonData] = useState(null);

	const humanLanguage = location.pathname.split("/")[1];
	const programmingLanguage = location.pathname.split("/")[2];

	useEffect(() => {
		const loadMenu = async () => {
			try {
				const module = await import(`@data/${humanLanguage}/${programmingLanguage}/${jsonFile}.json`);
				getJsonData(module.default);
			} catch (err) {
				console.error(`${jsonFile} data not found for "${humanLanguage}" and/or "${programmingLanguage}"`, err);
				getJsonData(null);
			}
		};

		loadMenu();
	}, [humanLanguage, programmingLanguage]);

	return jsonData;
}

export function languageJsonLoader(jsonFile) {
	const [currentLang, setCurrentLang] = useState("en");
	const [jsonData, getJsonData] = useState(null);
	
	// To get the stored language to set its content to the language and fix all links to match the same language.
	useEffect(() => {
		async function loadContent() {
			const storedLang = await getLanguage();
			const lang = storedLang || "en";
			setCurrentLang(lang);

			try {
				const module = await import(`@data/${lang}/${jsonFile}.json`);
				getJsonData(module.default);
			} catch (e) {
				console.error(`Could not load the ${jsonFile} page in "${lang}", falling back to English.`, e);
				const fallback = await import(`@data/en/${jsonFile}.json`);
				getJsonData(fallback.default);
			}
		}

		loadContent();
	}, []);

	return jsonData;
}