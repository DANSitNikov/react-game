import React, { useEffect, useState } from 'react';
import { setStatistic } from '../../redux/currentGameStatisticReducer';

const Timer = (props) => {
	const [time, setTime] = useState({ ml: 0, s: 0, m: 0 });
	const [intervalID, setIntervalID] = useState();
	const { finishedGame, number, victoryGame } = props;
	let updatedS = time.s;
	let updatedM = time.m;
	let updatedMl = time.ml;

	function run() {
		if (updatedMl === 99) {
			updatedS += 1;
			updatedMl = 0;
		} else if (updatedS === 60) {
			updatedM += 1;
			updatedS = 0;
		}
		updatedMl += 1;
		return setTime({ ml: updatedMl, s: updatedS, m: updatedM });
	}

	useEffect(() => {
		const startInterval = setInterval(() => run(), 10);
		setIntervalID(startInterval);
		return () => clearInterval(startInterval);
	}, []);

	if (finishedGame) {
		clearInterval(intervalID);
	}

	if (victoryGame) {
		setStatistic(time, number);
		clearInterval(intervalID);
	}

	return (
		<div>
			<span>{time.m < 10 ? `0${time.m}` : time.m}</span>
			<span> : </span>
			<span>{time.s < 10 ? `0${time.s}` : time.s}</span>
			<span> : </span>
			<span>{time.ml < 10 ? `0${time.ml}` : time.ml}</span>
		</div>
	);
};

export default Timer;
