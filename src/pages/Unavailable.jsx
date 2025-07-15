/**
 * 
 * @returns The content of the page telling the user that we couldn't put in the effort
 * 
 */
export default function Unavailable() {
	return(
		<div className="splashScreen">
			<h1 className="splash">Page Unavailable</h1>
			<p className="splashText">Sorry, the current page is unavailable.</p>
			<button className="button" onClick={() => history.back()}>Back</button>
		</div>
	);
}