import React from "react";

export const Output = React.memo(({ output }) => {
	return (
		<div className="programOutput">
			{output}
		</div>
	);
});
