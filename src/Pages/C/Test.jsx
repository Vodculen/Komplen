import Menu from "../../Components/Menu";
import CSidebar from "../../Components/Sidebars/CSidebar";

import "./../../Stylesheets/SplashScreen.css"


export default function CTest() {
	return(
		<>
			<Menu />
			<div className="page">
				<CSidebar />
				<div className="content">
				</div>
			</div>
			
		</>
	);
}