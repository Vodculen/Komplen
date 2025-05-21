import { Link } from "react-router-dom";

import "./../Stylesheets/SplashScreen.css"


export default function Welcome() {
	return(
		<div className="splashScreen">
			<h1 className="splash">Welcome to Komplen</h1>
			<p className="splashText">[Splash Text]</p>
			<Link to="/languages"><button className="button">Get Started</button></Link>
		</div>
	);
}