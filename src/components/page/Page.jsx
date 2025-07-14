import Title from "./Title";

import "@stylesheets/Global.css";


export default function Page() {
	const file = JSON.parse(response);

	if (JSON.parse('{ "name": "" }')) {
		return <Title title={file.name} />
	}
}