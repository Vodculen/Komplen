// Outside Libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';


// Pages
import Welcome from "./Pages/Welcome";
import Languages from "./Pages/Languages";
import CHomepage from "./Pages/C/Homepage";

// The Stylesheet
import "./Stylesheets/Global.css";

import { InitDarkmode } from "./Window/ToggleDarkmode";


// Originally App but I like Software better, if you don't like it too bad!
export default function Software() {
	useEffect(() => {
		InitDarkmode();
	}, []);

	return(
		// I don't know if I'm going to keep it Router or change it to BrowserRouter.
		<div id="software">
			<Router>
				<Routes>
					<Route index element={ <Welcome /> } />
					<Route path="/languages" element={ <Languages /> } />

					{/* Routes to C Pages */}
					<Route path="/c/homepage" element={ <CHomepage /> } />

				</Routes>
			</Router>
		</div>
	);
}
