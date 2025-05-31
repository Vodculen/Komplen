import { Link } from "react-router-dom";

import "./../Stylesheets/SplashScreen.css"

// Pretty good probbly gonna add the darkmode switcher and language select later or maybe not
export default function Welcome() {
	return(
		<div className="splashScreen">
			{/* Can we rename the className to hero or something? */}
			<h1 className="splash">Welcome to Komplen</h1>
			{/* Please acctually put the program's hero text and rename the class */}
			<p className="splashText">[Splash Text]</p>
			<Link to="/languages"><button className="button">Get Started</button></Link>
		</div>
	);
}