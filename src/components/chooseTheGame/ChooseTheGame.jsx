import React from "react";
import { Button } from "react-bootstrap";
import style from './chooseLevel.module.scss';
import { NavLink } from "react-router-dom";
import store from "../../redux/store";

const ChooseTheGame = (props) => {
	const gameLevels = ['36', '64', '81'];
	console.log(props);

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
