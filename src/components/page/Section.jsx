import Spacer from "./Spacer";


/**
 * 
 * @param {title} title The title of the section
 * @param {content} content What's inbetween the section title and divider
 * 
 * @returns The correctly formated elements so everything looks good
 *  
 */
export default function Section({ title, content }) {
	return (
		<>
			<h1 className="section">{title}</h1>
			{content}
			<Spacer amount={44} />
			<div className="divider"></div>
		</>
	);
}