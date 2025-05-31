import LinkedList from "../LinkedList";
import Spacer from "./Spacer";


export default function ChapterSection({ list, sectionName }) {
	return (
		<ul>
			<h2 className="chaptersSection">{ sectionName }</h2>
			<LinkedList list={list} />
			<Spacer amount={32} />
		</ul>
	);
}