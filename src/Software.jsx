// Outside Libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Welcome from "./Pages/Welcome";

// The Stylesheet - It dose abolutly nothing hah
import "./Style.css";


// Originally App but I like Software better, if you don't like it too bad!
export default function Software() {
	return(
		// I don't know if I'm going to keep it Router or change it to BrowserRouter.
		<Router>
			<Routes>
				<Route index element={ <Welcome /> } />
			</Routes>
		</Router>
	);
}
