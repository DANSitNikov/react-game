import React, { useEffect, useState } from 'react';

const Timer = (props) => {
	const [time, setTime] = useState({ s: 0, m: 0 });
	const [intervalID, setIntervalID] = useState();
	const { finishedGame } = props;
	let updatedS = time.s;
	let updatedM = time.m;

	function run() {
		if (updatedS === 60) {
			updatedM += 1;
			updatedS = 0;
		}
		updatedS += 1;
		return setTime({ s: updatedS, m: updatedM });
	}

	useEffect(() => {
		const startInterval = setInterval(() => run(), 1000);
		setIntervalID(startInterval);
		return () => clearInterval(startInterval);
	}, []);

	if (finishedGame) {
		clearInterval(intervalID);
	}

	return (
		<div>
			<span>{time.m < 10 ? `0${time.m}` : time.m}</span>
			<span> : </span>
			<span>{time.s < 10 ? `0${time.s}` : time.s}</span>
		</div>
	);
};

export default Timer;
