import { Link } from "react-router-dom";


export default function LinkedList({ list }) {
	const listItems = list.map(item =>
		<li key={item.id} className={item.active}>
			<Link to={item.link} className="link">{item.tab}</Link>
		</li>
	);

	return (
		<>
			{listItems}
		</>
	);
}