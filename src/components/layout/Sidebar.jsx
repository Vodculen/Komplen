import Chapters from "./Chapters";
import JsonLoader from "@components/libraries/JsonLoaders";


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

/**
 * @returns A fully filled out and stylized sidebar
 */
export default function Sidebar() {
	const load = JsonLoader("Sidebar");
	
	if (!load) {
		return null;
	}

	const allTabs = flattenTabs(load);
	const activeTabIndex = allTabs.findIndex((tab) => tab.link === location.pathname);

	return <Chapters list={load} activeTabIndex={activeTabIndex} />;
}
