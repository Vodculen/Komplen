import { Link } from "react-router-dom";

import "./../Stylesheets/SplashScreen.css"

/**
 * 
 * @returns The Welcome page which is the first thing the user will see
 * 
 * Also we should rename it all to welcome page eventually because I'm lazy
 * 
 */
export default function Welcome() {
	return(
		<div className="splashScreen">
			<h1 className="splash">Welcome to Komplen</h1>
			<p className="splashText">[Splash Text]</p>
			<Link to="/languages"><button className="button">Get Started</button></Link>
		</div>
	);
}