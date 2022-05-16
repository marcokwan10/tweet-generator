import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Prompt({ submitHandler, emotion, person, setEmotion, setPerson }) {
	return (
		<div className="prompt-container">
			<h1 id="write-a">Write a</h1>
			<input id="emotion" type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} />
			<h1 id="tweet">tweet</h1>
			<h1 id="about">about</h1>
			<h1 id="person">
				<input id="person-input" type="text" value={person} onChange={(e) => setPerson(e.target.value)} />.
			</h1>
			<FontAwesomeIcon onClick={submitHandler} size="4x" id="submit" icon={faCirclePlus} />
		</div>
	);
}

export default Prompt;
