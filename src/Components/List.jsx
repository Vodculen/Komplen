import React from "react";
import { Link } from "react-router-dom";

export default function List({ list }) {
	const listItems = list.map(item =>
		
		<li className={item.active}><Link to={item.link} className="link">{item.tab}</Link></li>
	);

	return (
		<>
			{listItems}
		</>
	);
}