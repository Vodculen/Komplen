import { Outlet } from "react-router-dom";


// Since we don't care about the sidebar and menu we just return the links page
export default function ExclusiveLayout() {
	return <Outlet />;
}
