import { Outlet } from "react-router-dom";
import Sidebar from "./Page/Sidebar";
import Menu from "./Page/Menu";


import "./../Stylesheets/Menu.css";
import "./../Stylesheets/Chapters.css";


// This is where we do care for the menu and sidebar so we render it with the content
export default function Layout() {
	return (
		<>
			<Menu />
			<div className="page">
				<Sidebar />
				
				<main className="content">
					<Outlet />
				</main>
			</div>
		</>
	);
}
