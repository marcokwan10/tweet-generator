import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Prompt({ submitHandler, emotion, person, setEmotion, setPerson }) {
	return (
		<div className="prompt-container">
			<h1 id="write-a">Write a</h1>
			<div id="emotion">
				<input type="text" placeholder="funny" value={emotion} onChange={(e) => setEmotion(e.target.value)} />
			</div>
			<h1 id="tweet">tweet</h1>
			<h1 id="about">about</h1>
			<div id="person">
				<input type="text" placeholder="spiderman" value={person} onChange={(e) => setPerson(e.target.value)} />
				<h1>.</h1>
			</div>
			<FontAwesomeIcon onClick={submitHandler} size="4x" id="submit" icon={faCirclePlus} />
		</div>
	);
}

export default Prompt;
