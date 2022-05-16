import React, { useState } from "react";
import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import TweetsResult from "./components/TweetsResult";

function App() {
	const [emotion, setEmotion] = useState("");
	const [person, setPerson] = useState("");
	const [tweets, setTweets] = useState([]);

	const submitHandler = async (e) => {
		e.preventDefault();
		const prompt = `Write a ${emotion} tweet about ${person}`;
		const config = {
			prompt: prompt,
			temperature: 0.5,
			max_tokens: 32,
			top_p: 1.0,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
		};

		const res = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
			},
			body: JSON.stringify(config),
		});

		const data = await res.json();
		setTweets((prev) => [[prompt, data.choices[0].text], ...prev]);
		setEmotion("");
		setPerson("");
	};

	return (
		<div className="App">
			<Header />
			<div className="main-container">
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

				<div className="tweets-container">
					<h2>Your generated tweets:</h2>
					{tweets.map((tweet) => (
						<TweetsResult tweet={tweet} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
