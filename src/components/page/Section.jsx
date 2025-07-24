import Spacer from "./Spacer";


/**
 * 
 * @param {title} title The title of the section
 * @param {content} content What's between the section title and divider
 * 
 * @returns The correctly formatted elements so everything looks good
 *  
 */
export default function Section({ title, content }) {
	return (
		<>
			<h1 className="section">{title}</h1>
			{content}
			<Spacer amount={36} />
			<div className="divider"></div>
		</>
	);
}