export default function List({ list }) {
	const listItems = list.map(item =>
		<li key={item.id}>{item.text}</li>
	);

	return (
		<ul className="list">
			{listItems}
		</ul>
	);
}