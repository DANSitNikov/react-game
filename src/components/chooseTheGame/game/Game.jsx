import React from "react";
import { Button } from "react-bootstrap";
import style from './game.module.scss';
import Item from "../gameItem/Item";

const Game = (props) => {
	console.log(props);
	const element = [];
	const number = Number(props.location.state.num);

	for (let i = 0; i < number; i += 1) {
		element.push(i + 1);
	}

	const bombs = [];

	for (let i = 0; i < Math.ceil(number / 100 * 15); i += 1) {
		const addNum = Math.round(Math.random() * (number - 1)) + 1;
		if (bombs.includes(addNum)) {
			i -= 1;
		} else {
			bombs.push(addNum);
		}
	}


	return (
		<div>
			<div className={ `${style.field} ${number === 36 ? style.nine :
				number === 81 ? style.sixty : style.twentyFive}`}>
				{element.map((item) => <Item key={item} num={number} bombs={bombs} item={item} />)}
			</div>
			<Button variant="outline-success">Start the game</Button>
		</div>
	)
}

export default Game;