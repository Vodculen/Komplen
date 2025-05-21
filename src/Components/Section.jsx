import Spacer from "./Spacer";

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