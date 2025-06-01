import { Outlet } from "react-router-dom";
import Sidebar from "./Page/Sidebar";
import Menu from "./Page/Menu";


import "./../Stylesheets/Menu.css";
import "./../Stylesheets/Chapters.css";


/**
 * 
 * @returns The page as well as the Menu and Sidebar
 * 
 */
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
