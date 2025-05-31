// Souly for the purpose to tell the user we haven't made the page yet
export default function Unavaible() {
	return(
		<div className="splashScreen">
			<h1 className="splash">Page Unavaible</h1>
			{/* Maybe better the message here */}
			<p className="splashText">Sorry, the current page is unavaible.</p>
			<button className="button" onClick={() => history.back()}>Back</button>
		</div>
	);
}