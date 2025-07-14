import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { LoadTheme } from "@window/ToggleDarkmode";
import { DefaultLayout, ExclusiveLayout } from "@components/Layout/Layouts";


// Pages
import Welcome from "@pages/General/Welcome";
import Languages from "@pages/General/Languages";
import Unavaible from "@pages/General/Unavaible";


// C Pages
import CHomepage from "@pages/C/Homepage";
import CGettingStarted from "@pages/C/GettingStarted";
import COutput from "@pages/C/Output";
import CEscapeSequences from "@pages/C/EscapeSequences";
import CComments from "./Pages/C/Comments";


// The Stylesheet
import "./Stylesheets/Global.css";


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
						<Route path="/c/homepage" element={ <CHomepage /> } />
						<Route path="/c/getting_started" element={ <CGettingStarted /> } />
						<Route path="/c/output" element={ <COutput /> } />
						<Route path="/c/escape_sequences" element={ <CEscapeSequences /> } />
						<Route path="/c/comments" element={ <CComments /> } />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
