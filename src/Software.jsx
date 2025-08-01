import { useEffect } from 'react';
import { LoadTheme } from "@window/ToggleDarkmode";
import { getLanguage } from './window/ToggleLanguages';
import { RouterProvider } from "react-router-dom";
import router from './Router';

// The Stylesheet
import "@stylesheets/Global.css";


/**
 * @returns The Routes that depending on the link path displays the page contents at that link path
 */
export default function Software() {
	useEffect(() => {
		LoadTheme();
		getLanguage();
	}, []);

	return (
		<div id="software">
			<RouterProvider router={router} />
		</div>
	);
}
