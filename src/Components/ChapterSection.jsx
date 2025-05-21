import LinkedList from "./LinkedList";


export default function ChapterSection({ list, sectionName }) {
	return (
		<ul>
			<h2 className="chaptersSection">{ sectionName }</h2>
			<LinkedList list={list} />
			<div className="spacer"></div>
		</ul>
	);
}