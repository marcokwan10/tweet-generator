import React, { useState } from "react";
import "./app.css";

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
		setTweets((prev) => [...prev, [prompt, data.choices[0].text]]);
		setEmotion("");
		setPerson("");
	};

	return (
		<div className="App">
			<Header />
			<div className="main-container">
				<div className="generate-container">
					<div className="prompt-container">
						<h1>Write a</h1>
						<input type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} />
						<h1>tweet about</h1>
						<input type="text" value={person} onChange={(e) => setPerson(e.target.value)} />
					</div>
					<button onClick={submitHandler}>Submit</button>
				</div>

				<div className="generated-container">
					<h1>your generated tweets</h1>
					{tweets.map((tweet) => (
						<TweetsResult tweet={tweet} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

//Top 3 Rock artist in USA
//write an angry tweet about Elon
