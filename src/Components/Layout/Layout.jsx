import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Menu from "./Menu";


import "@stylesheets/Menu.css";
import "@stylesheets/Chapters.css";


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
