import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function JsonLoader(jsonFile) {
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