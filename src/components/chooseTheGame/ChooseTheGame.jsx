import React from "react";
import { Button } from "react-bootstrap";
import style from './chooseLevel.module.scss';
import { NavLink } from "react-router-dom";

const ChooseTheGame = () => {
	const gameLevels = ['36', '64', '81'];

	const levelsElements = gameLevels.map((el) => <NavLink to={{pathname: `/game/${el}`, state: {
			num: el,
		}}}><Button variant="outline-light">{el}</Button></NavLink>)

	return (
		<div className={style.chooseLevel}>
			{ levelsElements }
		</div>
	)
}

export default ChooseTheGame;
