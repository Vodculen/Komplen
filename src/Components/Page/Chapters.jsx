import { useRef } from "react";
import ChapterSection from "./ChapterSection";
import RememberPosition from "../RememberScrollPosition";
import Spacer from "./Spacer";


/**
 * 
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
			<RememberPosition scrollContainerRef={chaptersRef} />
			<Spacer amount={32} />
			{listItems}
		</div>
	);
}
