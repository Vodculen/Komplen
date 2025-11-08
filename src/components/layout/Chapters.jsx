import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Spacer from "@components/page/Spacer";
import LinkedList from "@components/libraries/LinkedList";

/**
 * @param {list} list The list of ChapterSections.
 * @param {activeTabIndex} activeTabIndex The list of all the link paths.
 * 
 * @returns All the ChapterSections in a list with some stylization.
 * @see ChapterSection()
 */
export default function Chapters({ list }) {
	const location = useLocation();
	const chaptersRef = useRef(null);
	let tabCounter = 0;

	const listItems = list.map((section, sectionIndex) => {
		const tabsWithActive = section.tabs.map((tab) => {
			if (tab.group) {
				return { ...tab, isGroup: true };
			} else {
				const isActive = location.pathname.startsWith(tab.link);

				tabCounter++;

				return { ...tab, active: isActive ? "active" : "" };
			}
		});

		return <ChapterSection key={sectionIndex} sectionName={section.title} list={tabsWithActive} location={location} />;
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
function ChapterSection({ list, sectionName, location }) {
	return (
		<ul>
			<h2 className="chaptersSection">{sectionName}</h2>

			{list.map((tab, i) =>
				tab.isGroup ? (
					<GroupedTabs key={i} group={tab.group} title={tab.name} location={location} />
				) : (
					<LinkedList key={i} list={[tab]} />
				)
			)}

			<Spacer amount={32} />
		</ul>
	);
}


function GroupedTabs({ group, title, location }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = (e) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	const tabsWithActive = group.map((g) => ({
		...g, active: location.pathname.startsWith(g.link) ? "active" : ""
	}));

	const Arrow = ({ open }) => (
		<svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e3e3e3" style={{ transform: open ? "rotate(270deg)" : "rotate(0deg)", transition: "transform 0.2s", }}><path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/></svg>
	);

	return (
		<div className="group">
			<p onClick={toggleOpen} className="groupName">
				<span>{title}</span>
				<span><Arrow open={isOpen} /></span>
			</p>

			{isOpen && (
				<div className="groupContent">
					<LinkedList list={tabsWithActive} />
				</div>
			)}
		</div>
	);
}