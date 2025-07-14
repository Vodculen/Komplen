import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

import "@stylesheets/Menu.css";
import "@stylesheets/Chapters.css";


/**
 * 
 * @returns The page as well as the Menu and Sidebar
 * 
 */
export function DefaultLayout() {
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

/**
 * 
 * @returns Just the page nothing else as we don't care for the Sidebar nor thr Menu
 * 
 */
export function ExclusiveLayout() {
	return <Outlet />;
}
