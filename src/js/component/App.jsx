import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";
export const App = () => {
	const [counter, setCounter] = useState(0);
	const [stop, setStop] = useState(false);
	useEffect(() => {
		if (stop == false) {
			if (counter > -1) {
				let interval = setInterval(function() {
					setCounter(previous => previous + 1);
				}, 1000);

				return () => clearInterval(interval);
			}
		}
	}, [counter, stop]);
	let five = Math.floor(counter / 10000);
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);

	return (
		<>
			<SecondsCounter
				digitOne={one}
				digitTwo={two}
				digitThree={three}
				digitFour={four}
				digitFive={five}
			/>
			<button
				onClick={() => {
					setStop(!stop);
					console.log(stop);
				}}>
				{stop ? "Start" : "Stop"}
			</button>
			<button
				onClick={() => {
					setCounter(0);
				}}>
				Reset
			</button>
		</>
	);
};
