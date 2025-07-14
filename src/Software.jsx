import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { LoadTheme } from "@window/ToggleDarkmode";
import { DefaultLayout, ExclusiveLayout } from "@components/layout/Layouts";


// Pages
import Welcome from "@pages/Welcome";
import Languages from "@pages/Languages";
import Unavaible from "@pages/Unavaible";


// C Pages


// The Stylesheet
import "@stylesheets/Global.css";
import Page from "@components/page/Page";


/**
 * @returns The Routes that depending on the link path displays the page contents at that link path
 */
export default function Software() {
	// This is for loading the theme in the store.json (Why can't we access the json file lets make our own then)
	useEffect(() => {
		LoadTheme();
	}, []);

	return(
		<div id="software">
			<BrowserRouter>
				<Routes>
					{/* This is for all the special pages without the Sidebar and Menu cause just hiding those elements still messed up the page */}
					<Route element={<ExclusiveLayout />}>
						<Route index element={<Welcome />} />
						<Route path="/languages" element={<Languages />} />
						<Route path="*" element={<Unavaible />} />
					</Route>

					{/* This is for all the normal pages that have both the Sidebar and Menu */}
					<Route element={<DefaultLayout />}>
						{/* Routes to C Pages */}
						<Route path="/c/homepage" element={ <Page data={"./data/c/Output.json"} /> } />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
