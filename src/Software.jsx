import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { LoadTheme } from "./Window/ToggleDarkmode";
import Layout from "./Components/Layout";
import ExclusiveLayout from "./Components/ExclusiveLayout";


// Pages
import Welcome from "./Pages/Welcome";
import Languages from "./Pages/Languages";
import Unavaible from "./Pages/Unavaible";


// C Pages
import CHomepage from "./Pages/C/Homepage";


// Java Pages
import JavaHomepage from "./Pages/Java/Homepage";


// The Stylesheet
import "./Stylesheets/Global.css";


/**
 * 
 * @returns The Routes that depending on the link path displays the page contents at that link path
 * 
 */
export default function Software() {
	// This is for loading the theme in the store.json
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
					<Route element={<Layout />}>
						{/* Routes to C Pages */}
						<Route path="/c/homepage" element={ <CHomepage /> } />

						{/* Routes to Java Pages */}
						<Route path="/java/homepage" element={ <JavaHomepage /> } />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
