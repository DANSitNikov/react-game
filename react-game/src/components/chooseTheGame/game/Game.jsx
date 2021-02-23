import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import style from './game.module.scss';
import Item from '../gameItem/Item';
import { createBombs, createElement } from '../../../redux/gameReducer';
import TimerContainer from '../../timer/TimerContainer';
import OpenCellsContainer from '../../openCells/OpenCellsContainer';

const Game = (props) => {
	const { number, gameStatus } = props;
	const gameField = React.createRef();
	const checked = [];
	const element = [...createElement(number)];
	const bombs = [...createBombs(number)];

	const checkItem = (e) => {
		let target;
		if (e.target) {
			target = e.target;
		} else {
			target = e;
		}

		const item = Number(target.id.split('-')[1]);
		const num = Math.sqrt(number);
		const one = item - num;
		const two = item - num + 1;
		const three = item - num - 1;
		const four = item - 1;
		const five = item + 1;
		const six = item + num;
		const seven = item + num + 1;
		const eight = item + num - 1;
		const bombsCount = [];

		if (item === 1) {
			bombsCount.push(five, seven, six);
		} else if (item === num) {
			bombsCount.push(four, six, eight);
		} else if (item === number - num + 1) {
			bombsCount.push(one, two, five);
		} else if (item === number) {
			bombsCount.push(one, three, four);
		} else if (item > 1 && item < num) {
			bombsCount.push(four, five, six, seven, eight);
		} else if (item > number - num + 1 && item < number) {
			bombsCount.push(one, two, three, four, five);
		} else if ((item - 1) % num === 0) {
			bombsCount.push(one, two, five, six, seven);
		} else if (item % num === 0) {
			bombsCount.push(one, three, four, six, eight);
		} else {
			bombsCount.push(one, two, three, four, five, six, seven, eight);
		}

		let btnText = 0;

		for (let i = 0; i < bombsCount.length; i += 1) {
			if (bombs.includes(bombsCount[i]) && bombsCount[i] > 0) {
				btnText += 1;
			}
		}

		if (bombs.includes(item)) {
			[...gameField.current.children].forEach((button) => {
				const btnDisabled = button;
				btnDisabled.disabled = true;
				if (bombs.includes(Number(button.id.split('-')[1]))) {
					button.classList.add(style.aggressive);
				}
				props.finishedGame(true);
			});
		} else {
			target.textContent = `${btnText}`;
			target.disabled = true;
			target.classList.add(style.friendly);
			props.setOpenCells(1);
		}

		checked.push(item);
		if (btnText === 0 && !bombs.includes(item)) {
			const checkOtherItems = (arr) => {
				arr.forEach((el) => {
					if (!checked.includes(el)) {
						checkItem(gameField.current.children[el - 1]);
					}
				});
			};

			checkOtherItems(bombsCount);
		}
	};

	const gameFieldElement = () => {
		return (
			<div
				onClick={(e) => checkItem(e)}
				ref={gameField}
				className={`${style.field} ${
					number === 25 ? style.twentyFive
						: number === 36 ? style.thirtySix
							: number === 49 ? style.fortySeven
								: style.impossible}`}
			>
				{element.map((item) => <Item key={item} item={item} />)}
			</div>
		);
	};

	return (
		<div>
			{gameStatus
				? (
					<>
						<div>click start the game</div>
						<Button onClick={() => props.setFieldStatus(false)} variant="outline-success">Start the game</Button>
					</ >
				)
				: (
					<>
						<div>
							<OpenCellsContainer />
							<TimerContainer />
						</div>
						{gameFieldElement()}
						<NavLink to="/aboutGame">
							<Button onClick={() => props.setFieldStatus(false)} variant="outline-success">
								Finish the game
							</Button>
						</NavLink>
					</>
				)}
		</div>
	);
};

export default Game;
