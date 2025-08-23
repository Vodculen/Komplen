import Code from "@components/page/Code";

/**
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

export function ComplexList({ list }) {
	const listItems = list.map(item => 
		<li key={crypto.randomUUID()}>
			{typeof item.text === "string"
				? item.text
				: Array.isArray(item.text)
				? item.text.map((part, index) => {
					if (typeof part === "string") {
						return <span key={index} className="text">{part}</span>;
					} else if (part.code) {
						return <Code key={index} code={part.code} />;
					}
					
					return null;
				})
				: null}
		</li>
	);

	return (
		<ul className="list">
			{listItems}
		</ul>
	);
}