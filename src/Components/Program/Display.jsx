import React from "react";

export const Display = React.memo(({ program }) => {
	return (
		<div className="program">
			<pre>{program}</pre>
		</div>
	);
});