import "../../Stylesheets/Boxes.css";

export default function Boxes({ title, content, mode = "info" }) {

	if (mode === "warn") {
		return (
			<div className="warn-box">
				<h1 className="box-title">{title}</h1>
				{content}
			</div>
		);
	} else if (mode === "info") {
		return (
			<div className="info-box">
				<h1 className="box-title">{title}</h1>
				{content}
			</div>
		);
	} else if (mode === "error") {
		return (
			<div className="error-box">
				<h1 className="box-title">{title}</h1>
				{content}
			</div>
		);
	} else {
		return (
			<div className="success-box">
				<h1 className="box-title">{title}</h1>
				{content}
			</div>
		);
	}
}