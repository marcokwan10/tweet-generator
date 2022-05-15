import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faUser } from "@fortawesome/free-solid-svg-icons";
import { faImage, faFaceSmile, faMap, faCalendarPlus } from "@fortawesome/free-regular-svg-icons";

function TweetsResult({ tweet }) {
	const [prompt, result] = tweet;
	return (
		<div className="tweet-container">
			<h4 id="prompt">{prompt}</h4>
			<div className="tweet">
				<div className="tweet-avatar">
					<div className="circle-bg">
						<FontAwesomeIcon icon={faUser} id="avatar" />
					</div>
				</div>
				<div className="tweet-content">
					<h5>{result}</h5>
					<p>
						<FontAwesomeIcon icon={faEarthAmericas} id="globe" />
						Everyone can reply
					</p>
					<hr />
					<div className="tweet-icon-list">
						<div>
							<FontAwesomeIcon icon={faImage} className="tweet-icon" />
							<FontAwesomeIcon icon={faFaceSmile} className="tweet-icon" />
							<FontAwesomeIcon icon={faCalendarPlus} className="tweet-icon" />
							<FontAwesomeIcon icon={faMap} className="tweet-icon" />
						</div>
						<button className="tweet-button">Tweet</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TweetsResult;
