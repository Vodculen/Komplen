import { useLocation } from "react-router-dom";
import Chapters from "./Chapters";


// Different List Payloads
import CSidebar from "@data/C/Sidebar.json";
import JavaSidebar from "@data/Java/Sidebar.json";


/**
 * 
 * @param {*} list The list of the diffrent links. In this use case, json files.
 * @returns Another list of links but in a program readable format.
 * 
 */
const flattenTabs = (list) => {
	let tabs = [];

	list.forEach(section => {
		section.tabs.forEach(tab => tabs.push(tab));
	});

	return tabs;
};


/**
 * 
 * @returns A list of the links depending on which path your on.
 * 
 */
export default function Sidebar() {
	const location = useLocation();
	const languagePath = location.pathname.split("/")[1];

	let list;

	switch (languagePath) {
		case "c":
			list = CSidebar;
			break;
		case "java":
			list = JavaSidebar;	
			break;
		default:
			console.error("The pathname doesn't exist in the database!");
			break;
	}

	const allTabs = flattenTabs(list);
	const activeTabIndex = allTabs.findIndex(tab => tab.link === location.pathname);

	return <Chapters list={list} activeTabIndex={activeTabIndex} />;
}