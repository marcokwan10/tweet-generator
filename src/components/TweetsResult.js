import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faUser } from "@fortawesome/free-solid-svg-icons";
import { faImage, faFaceSmile, faMap, faCalendarPlus, faClipboard } from "@fortawesome/free-regular-svg-icons";

function TweetsResult({ tweet }) {
	const [alert, setAlert] = useState(false);

	const tweetButtonHandler = () => {
		navigator.clipboard.writeText(tweet.result);
		setAlert(true);
		setTimeout(() => setAlert(false), 2000);
	};

	return (
		<div className="tweet-container">
			<h4 id="prompt">{tweet.prompt}</h4>
			<div className="tweet">
				<div className="tweet-avatar">
					<div className="circle-bg">
						<FontAwesomeIcon icon={faUser} id="avatar" />
					</div>
				</div>
				<div className="tweet-content">
					<h5>{tweet.result}</h5>
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
						{alert && (
							<p className="tweet-alert">
								Copied <FontAwesomeIcon icon={faClipboard} />
							</p>
						)}
						<button onClick={tweetButtonHandler} className="tweet-button">
							Tweet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TweetsResult;
