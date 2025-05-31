import { useLocation, Link } from 'react-router-dom';
import React, { useMemo } from 'react';


/**
 * 
 * @param {list} param0 The list of links that you can pass through names, links, id [Neccessary!], and if its active 
 * @returns The list with all the parameters given 
 */
function LinkedList({ list }) {
	// Gets the current location
	const location = useLocation();
	const currentPath = location.pathname;

	const listItems = useMemo(() => {
		return list.map(item => {
			const isCurrent = item.link === currentPath;
			return (
				<li key={item.id} className={item.active}>
					{/* If the link the user clicks on is the current link it won't reload the page */}
					{item.link && !isCurrent ? (
						<Link to={item.link} className="link">{item.tab}</Link>
					) : (
						<span className="link">{item.tab}</span>
					)}
				</li>
			);
		});
	}, [list, currentPath]);

	return <>{listItems}</>;
}

export default React.memo(LinkedList);