/**
 * 
 * @param {list} list The objects we want to be in a list.
 * 
 * @see LinkedList()
 * @returns A list of all the objects given.
 */
export default function List({ list }) {
	const listItems = list.map(item =>
		<li key={crypto.randomUUID()}>{item.text}</li>
	);

	return (
		<ul className="list">
			{listItems}
		</ul>
	);
}