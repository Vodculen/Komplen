import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LanguageProfile from "@components/page/LanguageProfile";
import Title from "@components/page/Title";
import "@stylesheets/Languages.css";

const supportedPages = new Set([
	"c",
	"java",
	// Add other supported IDs
]);

export default function Languages() {
	const location = useLocation();
	const isDarkMode = document.body.classList.contains("darkmode");
	const currentLang = location.pathname.split("/")[1] || "en";

	const [languageEntries, setLanguageEntries] = useState(null);

	useEffect(() => {
		async function loadLanguages() {
			try {
				// Dynamic import based on currentLang
				const module = await import(`@data/${currentLang}/Languages.json`);

				setLanguageEntries(module.default);
			} catch (e) {
				// fallback to English if load fails
				const module = await import(`@data/en/Languages.json`);

				console.error("Could not load language data, falling back to English.", e);
				
				setLanguageEntries(module.default);
			}
		}

		loadLanguages();
	}, [currentLang]);

	if (!languageEntries) {
		return null;
	}

	return (
		<div className="languagesPage">
			<Title title={languageEntries.title} />

			<div className="languageProfiles">
				{languageEntries.languages.map(({ id, name, image, bio }) => {
					const link = supportedPages.has(id) ? `/${currentLang}/${id}/homepage` : `/${currentLang}*`;
					
					return (
						<LanguageProfile
						key={id}
						link={link}
						image={getImageForTheme(id, image, isDarkMode)}
						alternate={`${name} Logo`}
						name={name}
						bio={bio}
						/>
					);
				})}
			</div>
		</div>
	);
}

const getImageForTheme = (id, baseImage, isDarkMode) => {
	// For the ones that change
	const darkModeImages = {
		rust: "RustDark.svg",
		na: "NADark.svg",
		cs: "NADark.svg",
		ds: "NADark.svg",
	};

	if (isDarkMode && darkModeImages[id]) {
		return `../src/assets/languages/${darkModeImages[id]}`;
	}

	return `../src/assets/languages/${baseImage}`;
};