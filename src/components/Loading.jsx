import React from "react";

function Loading() {
	return (
		<div className="loading">
			<img src={process.env.PUBLIC_URL + "loading.svg"} alt="spinner" />
		</div>
	);
}

export default Loading;
