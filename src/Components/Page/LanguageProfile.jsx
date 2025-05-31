import { Link } from "react-router-dom";


export default function LanguageProfile({ link, image, alternate, name, bio }) {
	return(
		<Link to={ link } className="languageProfile">
			<img src={ image } alt={ alternate } />
			<h2 className="name">{ name }</h2>
			<p className="bio">{ bio }</p>
		</Link>
	);
}