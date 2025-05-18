import React from "react";
import { Link } from "react-router-dom";


export default function Welcome() {
	return(
		<div className="splashScreen">
			<h1 className="splash">Welcome to Komplen</h1>
			<p className="splashText">[Splash Text]</p>
			<Link to="/"><button className="button">Get Started</button></Link>
		</div>
	);
}