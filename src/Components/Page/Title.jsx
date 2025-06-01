/**
 * 
 * @param {*} title The text you want the title of the page to be 
 * @returns The title that you inputed as well as a divider
 */
export default function Title({ title }) {
	return (
		<>
			<h1 className="title">{title}</h1>
			<div className="divider"></div>
		</>
	);
}