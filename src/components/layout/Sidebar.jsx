import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Chapters from "./Chapters";

/**
 * Flattens the sidebar tab structure.
 */
const flattenTabs = (list) => {
	let tabs = [];
	list?.forEach((section) => {
		section.tabs.forEach((tab) => tabs.push(tab));
	});
	return tabs;
};

export default function Sidebar() {
	const location = useLocation();
	const [sidebarData, setSidebarData] = useState(null);

	const lang = location.pathname.split("/")[1];
	const tech = location.pathname.split("/")[2];

	useEffect(() => {
		const loadSidebar = async () => {
			try {
				const module = await import(`@data/${lang}/${tech}/Sidebar.json`);
				setSidebarData(module.default);
			} catch (err) {
				console.error(`Sidebar data not found for "${tech}"`, err);
				setSidebarData(null);
			}
		};

		loadSidebar();
	}, [lang, tech]);

	if (!sidebarData) {
		return null;
	}

	const allTabs = flattenTabs(sidebarData);
	const activeTabIndex = allTabs.findIndex((tab) => tab.link === location.pathname);

	return <Chapters list={sidebarData} activeTabIndex={activeTabIndex} />;
}
