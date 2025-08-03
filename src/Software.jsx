import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { useEffect } from "react";

import { LoadTheme } from "@window/ToggleDarkmode";
import { getLanguage } from "./window/ToggleLanguages";

import "@stylesheets/Global.css";


/**
 * @returns The Routes that depending on the link path displays the page contents at that link path
 */
export default function Software() {
	// To get the theme and language information from storage to apply on start 
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
