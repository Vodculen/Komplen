import { useEffect, useState } from "react";
import { getLanguage } from "../window/ToggleLanguages";

import LanguageProfile from "@components/page/LanguageProfile";
import Title from "@components/page/Title";

import "@stylesheets/Languages.css";


/**
 * @returns The page that has all the programming languages the user can learn
 */
export default function Languages() {
	const isDarkMode = document.body.classList.contains("darkmode");
	const [currentLang, setCurrentLang] = useState("en");
	const [languages, setLanguages] = useState(null);

	// To get the stored language to set its content to the language and fix all links to match the same language.
	useEffect(() => {
		async function loadContent() {
			const storedLang = await getLanguage();
			const lang = storedLang || "en";
			setCurrentLang(lang);

			try {
				const module = await import(`@data/${lang}/Languages.json`);
				setLanguages(module.default);
			} catch (e) {
				console.error(`Could not load welcome page in "${lang}", falling back to English.`, e);
				const fallback = await import(`@data/en/Languages.json`);
				setLanguages(fallback.default);
			}
		}

		loadContent();
	}, []);

	// Make it show nothing when the page is loading and the user is there as having loading text for a split second looks ugly
	if (!languages) {
		return null;
	}

	return (
		<div className="languagesPage">
			<Title title={languages.title} />

			<div className="languageProfiles">
				{languages.languages.map(({ id, name, image, bio }) => {
					const link = supportedPages.has(id) ? `/${currentLang}/${id}/homepage` : `/${currentLang}*`;
					
					return (
						<LanguageProfile key={id} link={link} image={getImageForTheme(id, image, isDarkMode)} alternate={`${name} Logo`} name={name} bio={bio} />
					);
				})}
			</div>
		</div>
	);
}

// All the languages that are implemented
const supportedPages = new Set([
	"c",
	"java",
	// Include other fully done languages here...
]);

/**
 * @param {id} id The language in lowercase form used for getting a specific language
 * @param {baseImage} baseImage The image that is used for default and not the darkmode version
 * @param {isDarkMode} isDarkMode Is used for to detect if the user is in darkmode to change some logos 
 * 
 * @returns The path to the respected image for the programming language
 */
const getImageForTheme = (id, baseImage, isDarkMode) => {
	// For the ones that change
	const darkModeImages = {
		rust: "RustDark.svg",
		na: "NADark.svg",
		cs: "NADark.svg",
		ds: "NADark.svg"
		// Add more darkmode image names...
	};

	if (isDarkMode && darkModeImages[id]) {
		return `../src/assets/languages/${darkModeImages[id]}`;
	}

	return `../src/assets/languages/${baseImage}`;
};