import { Link } from "react-router-dom";

/**
 * @param {link} link The link to the langauge's Homepage.
 * @param {image} image The languages icon that people know.
 * @param {alternate} alternate IF somehow the user fucks up the software display this.
 * @param {name} name The name of the language.
 * @param {bio} bio The discription of the language.
 * 
 * @returns The language profile with all the customizations
 */
export default function LanguageProfile({ link, image, alternate, name, bio }) {
	return(
		<Link to={ link } className="languageProfile">
			<img src={ image } alt={ alternate } />
			<h2 className="name">{ name }</h2>
			<p className="bio">{ bio }</p>
		</Link>
	);
}