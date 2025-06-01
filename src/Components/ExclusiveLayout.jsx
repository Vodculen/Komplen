import { Outlet } from "react-router-dom";


/**
 * 
 * @returns Just the page nothing else as we don't care for the Sidebar nor thr Menu
 * 
 */
export default function ExclusiveLayout() {
	return <Outlet />;
}
