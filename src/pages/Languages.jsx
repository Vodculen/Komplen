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
const currentLang = location.pathname.split("/")[1] || "en";

const [languageEntries, setLanguageEntries] = useState([]);

useEffect(() => {
	async function loadLanguages() {
	try {
		// Dynamic import based on currentLang
		const module = await import(`@data/${currentLang}/Languages.json`);
		setLanguageEntries(module.default);
	} catch (e) {
		console.error("Could not load language data, falling back to English.", e);
		// fallback to English if load fails
		const module = await import(`@data/en/Languages.json`);
		setLanguageEntries(module.default);
	}
	}
	loadLanguages();
}, [currentLang]);

return (
	<div className="languagesPage">
		<Title title="Programming Languages" />

		<div className="languageProfiles">
			{languageEntries.map(({ id, name, image, bio }) => {
				const link = supportedPages.has(id) ? `/${currentLang}/${id}/homepage` : "*";
				
				return (
					<LanguageProfile key={id} link={link} image={`@assets/languages/${image}`} alternate={`${name} Logo`} name={name} bio={bio} />
				);
			})}
		</div>
	</div>
);
}