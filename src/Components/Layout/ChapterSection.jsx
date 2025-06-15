import LinkedList from "@components/Helpers/LinkedList";
import Spacer from "@components/Page/Spacer";


/**
 * 
 * @param {list} list The list of links that go under the section.
 * @param {sectionName} sectionName The name for the section.
 *  
 * @returns The title and all the links under the title
 * 
 */
export default function ChapterSection({ list, sectionName }) {
	return (
		<ul>
			<h2 className="chaptersSection">{ sectionName }</h2>
			<LinkedList list={list} />
			<Spacer amount={32} />
		</ul>
	);
}