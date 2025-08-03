import { useRef } from "react";

import Spacer from "@components/page/Spacer";
import LinkedList from "@components/libraries/LinkedList";


/**
 * @param {list} list The list of ChapterSections.
 * @param {activeTabIndex} activeTabIndex The list of all the link paths.
 * 
 * @returns All the ChapterSections in a list with some stylization.
 * @see ChapterSection()
 */
export default function Chapters({ list, activeTabIndex }) {
	const chaptersRef = useRef(null);
	let tabCounter = 0;

	const listItems = list.map((section, sectionIndex) => {
		const tabsWithActive = section.tabs.map((tab) => {
			const isActive = tabCounter === activeTabIndex;
			const updatedTab = { ...tab, active: isActive ? "active" : "" };

			tabCounter++;
			return updatedTab;
		});

		return <ChapterSection key={sectionIndex} sectionName={section.title} list={tabsWithActive} />;
	});

	return (
		<div className="chapters" ref={chaptersRef}>
			<Spacer amount={32} />
			{listItems}
		</div>
	);
}

/**
 * @param {list} list The list of links that go under the section.
 * @param {sectionName} sectionName The name for the section.
 *  
 * @returns The title and all the links under the title
 */
function ChapterSection({ list, sectionName }) {
	return (
		<ul>
			<h2 className="chaptersSection">{ sectionName }</h2>
			<LinkedList list={list} />
			<Spacer amount={32} />
		</ul>
	);
}