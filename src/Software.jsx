import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Layout from "./Components/Layout";
import ExclusiveLayout from "./Components/ExclusiveLayout";
import { InitDarkmode } from "./Window/ToggleDarkmode";

// Pages
import Welcome from "./Pages/Welcome";
import Languages from "./Pages/Languages";
import Unavaible from "./Pages/Unavaible";

// C Pages
import CHomepage from "./Pages/C/Homepage";
import CArrays from "./Pages/C/Arrays";
import CStructs from "./Pages/C/Structs";

// The Stylesheet
import "./Stylesheets/Global.css";


// Originally App but I like Software better, if you don't like it too bad!
export default function Software() {
	// This is for initalizing Darkmode on startup so it's actually darkmode 
	useEffect(() => {
		InitDarkmode();
	}, []);

	return(
		<div id="software">
			<BrowserRouter>
				<Routes>
					{/* This is for all the special pages without the Sidebar and Menu cause just hiding those elements still messed up the page */}
					<Route element={<ExclusiveLayout />}>
						<Route index element={<Welcome />} />
						<Route path="/languages" element={<Languages />} />
						{/* We need to add a WIP page I tried but to no avail */}
						<Route path="*" element={<Unavaible />} />
					</Route>

					{/* This is for all the normal pages that have both the Sidebar and Menu */}
					<Route element={<Layout />}>
						{/* Routes to C Pages */}
						<Route path="/c/homepage" element={ <CHomepage /> } />
						<Route path="/c/arrays" element={ <CArrays /> } />
						<Route path="/c/structs" element={ <CStructs /> } />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
