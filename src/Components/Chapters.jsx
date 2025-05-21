import ChapterSection from "./ChapterSection";


export default function Chapters({ list }) {
	const listItems = list.map((item, index) =>
		<ChapterSection key={index} sectionName={item.title} list={item.tabs} />
	);

	return (
		<div className="chapters">
			<div className="spacer"></div>
			{listItems}
		</div>
	);
}