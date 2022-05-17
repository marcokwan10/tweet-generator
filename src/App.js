import React, { useState } from "react";
import "./main.css";

import Header from "./components/Header";
import Prompt from "./components/Prompt";
import TweetsResult from "./components/TweetsResult";
import Loading from "./components/Loading";

function App() {
	const [emotion, setEmotion] = useState("");
	const [person, setPerson] = useState("");
	const [tweets, setTweets] = useState(() => {
		const initialValue = JSON.parse(localStorage.getItem("tweets"));
		return initialValue || [];
	});
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const prompt = `Write a ${emotion} tweet about ${person}.`;
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

		//using data.id as a key for tweets.map
		const result = { prompt, result: data.choices[0].text, id: data.id };

		//update state
		setTweets((prev) => [result, ...prev]);

		//utilize local storage to store prompt, tweet and key
		let tweets = localStorage.getItem("tweets");
		if (tweets) {
			tweets = JSON.parse(tweets);
			const updatedTweets = [result, ...tweets];
			localStorage.setItem("tweets", JSON.stringify(updatedTweets));
		} else {
			const newTweets = [result];
			localStorage.setItem("tweets", JSON.stringify(newTweets));
		}

		setEmotion("");
		setPerson("");
		setIsLoading(false);
	};

	return (
		<div className="App">
			{isLoading && <Loading />}
			<Header />
			<div className="main-container">
				<Prompt
					submitHandler={submitHandler}
					emotion={emotion}
					person={person}
					setEmotion={(value) => setEmotion(value)}
					setPerson={(value) => setPerson(value)}
				/>

				<div className="tweets-container">
					<h3>Tweets Generated:</h3>
					{tweets.map((tweet) => (
						<TweetsResult tweet={tweet} key={tweet.id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
