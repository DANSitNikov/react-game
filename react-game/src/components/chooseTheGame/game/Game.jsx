import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './game.module.scss';
import Item from '../gameItem/Item';
import { bombsIncludes, createBombs, createElement, createGameData, friendIncludes } from '../../../redux/gameReducer';
import TimerContainer from '../../timer/TimerContainer';
import OpenCellsContainer from '../../openCells/OpenCellsContainer';
import friendlyDragon from '../../../assets/sounds/friendlydragon.mp3';
import Button from '@material-ui/core/Button';

const Game = (props) => {
	const {
		number, gameStatus, openCells,
		finishedGame, winnerGame, soundVolume,
		friend, bomb, showBombsBtn,
		autoGameBtn, autoWinBtn, mode,
		language,
	} = props;
	const [bombs] = useState([...createBombs(number)]);
	const [element] = useState([...createElement(number)]);
	const [checked] = useState([]);
	const [won] = useState(React.createRef());
	const [lost] = useState(React.createRef());
	const [friendlyDragonSound] = useState(new Howl({
		src: friendlyDragon,
		volume: soundVolume,
	}));
	const [gameField] = useState(React.createRef());
	const color = mode === 'friendly' ? 'primary' : 'secondary';

	if (openCells === number - bombs.length) {
		finishedGame(true);
		winnerGame(true);
		setTimeout(() => {
			won.current.classList.add(style.visible);
		}, 1500)
	}

	let phrases = {};

	Object.keys(language.language).forEach((key) => {
		if (key === props.language.langStatus) {
			phrases = {
				startGame: props.language.language[key].game.startGame,
				clickToStart: props.language.language[key].game.clickToStart,
				showBombs: props.language.language[key].game.showBombs,
				autoGame: props.language.language[key].game.autoGame,
				autoVictory: props.language.language[key].game.autoVictory,
				finishTheGame: props.language.language[key].game.finishTheGame,
			};
		}
	});

	const checkItem = (e) => {
		let target;
		if (e.target) {
			target = e.target;
		} else {
			target = e;
		}

		if (target.className.includes(style.field)) {
			return;
		}

		const {
			item, bombsCount, btnText
		} = createGameData(target, number, bombs);

		if (bombs.includes(item)) {
			bombsIncludes(gameField, bombs, bomb);
			finishedGame(true);
			setTimeout(() => {
				lost.current.classList.add(style.visible);
			}, 1500)
		} else {
			friendIncludes(btnText,friend, target);
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

		props.changeAutoGameStatus('inactive');
		props.changeAutoWinGameStatus('inactive');
	};

	const showBombs = (e) => {
		e.preventDefault();

		[...gameField.current.children].forEach((button) => {
			if (bombs.includes(Number(button.id.split('-')[1]))) {
				bomb ? button.classList.add(style.aggressiveOne)
					: button.classList.add(style.aggressiveTwo);
			}
		});

		setTimeout(() => {
			[...gameField.current.children].forEach((button) => {
				if (bombs.includes(Number(button.id.split('-')[1]))) {
					bomb ? button.classList.remove(style.aggressiveOne)
						: button.classList.remove(style.aggressiveTwo);
				}
			});
			props.changeShowBombsBtnStatus('inactive');
		}, 200);
	};

	const startAutoWinGame = () => {
		[...gameField.current.children].forEach((button) => {
			const btnDisabled = button;
			btnDisabled.disabled = true;
		});

		checked.push(...bombs);

		const start = setInterval(() => {
			if (checked.length === number) {
				clearInterval(start);
			} else {
				friendlyDragonSound.play();
				autoWin();
			}
		}, 2000);

		props.changeShowBombsBtnStatus('inactive');
		props.changeAutoGameStatus('inactive');
		props.changeAutoWinGameStatus('inactive');
	};

	const autoWin = () => {
		const createItem = () => {
			const preItem = Math.ceil(Math.random() * number);
			if (!checked.includes(preItem)) {
				return preItem;
			}
			return createItem();
		}
		const itemGlobal = createItem();

		const autoWinGo = (itemLocal) => {
			const parameter = !itemLocal ? itemGlobal : itemLocal;
			const {
				item, bombsCount, btnText
			} = createGameData(parameter, number, bombs);

			friendIncludes(btnText,friend, gameField.current.children[item - 1]);

			props.setOpenCells(1);
			checked.push(item);

			if (btnText === 0 && !bombs.includes(item)) {
				const checkOtherItems = (arr) => {
					arr.forEach((el) => {
						if (!checked.includes(el)) {
							const giveItem = Number(gameField.current.children[el - 1].id.split('-')[1]);
							autoWinGo(giveItem);
						}
					});
				};

				checkOtherItems(bombsCount);
			}
		}

		autoWinGo();
	};

	const startAutoGame = (e) => {
		e.target.disabled = true;

		[...gameField.current.children].forEach((button) => {
			const btnDisabled = button;
			btnDisabled.disabled = true;
		});

		const start = setInterval(() => {
			let limit = false;
			if (checked.length !== 0) {
				for (let i = 0; i < checked.length; i += 1) {
					if (bombs.includes(checked[i])) {
						limit = true;
					}
				}
			}
			if (limit) {
				clearInterval(start);
			} else {
				friendlyDragonSound.play();
				autoGame();
			}
		}, 2000);

		props.changeShowBombsBtnStatus('inactive');
		props.changeAutoGameStatus('inactive');
		props.changeAutoWinGameStatus('inactive');
	};

	const autoGame = () => {
		const createItem = () => {
			const preItem = Math.ceil(Math.random() * number);
			if (!checked.includes(preItem)) {
				return preItem;
			}
			return createItem();
		}
		const itemGlobal = createItem();

		const autoGameGo = (itemLocal) => {
			const parameter = !itemLocal ? itemGlobal : itemLocal;
			const {
				item, bombsCount, btnText
			} = createGameData(parameter, number, bombs);

			if (bombs.includes(item)) {
				bombsIncludes(gameField, bombs, bomb);
				finishedGame(true);
				setTimeout(() => {
					lost.current.classList.add(style.visible);
				}, 1500)
			} else {
				friendIncludes(btnText,friend, gameField.current.children[item - 1]);
				props.setOpenCells(1);
			}

			checked.push(item);

			if (btnText === 0 && !bombs.includes(item)) {
				const checkOtherItems = (arr) => {
					arr.forEach((el) => {
						if (!checked.includes(el)) {
							const giveItem = Number(gameField.current.children[el - 1].id.split('-')[1]);
							autoGameGo(giveItem);
						}
					});
				};

				checkOtherItems(bombsCount);
			}
		}

		autoGameGo();
	};

	const gameFieldElement = () => {
		return (
			<div
				onClick={(e) => {
					checkItem(e);
					friendlyDragonSound.play();
				}}
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
					<div className={style.startingTheGame}>
						<div className={style.needClickToStart}><h2>Click start the game</h2></div>
						<Button className={style.startTheGame} onClick={() => props.setFieldStatus(false)} variant="contained" color={color}>
							<h4>{phrases.startGame}</h4>
						</Button>
					</div>
				)
				: (
					<>
						<div className={style.statistic}>
							<OpenCellsContainer />
							<TimerContainer />
						</div>
						{gameFieldElement()}
						<div className={style.btnWrapper}>
							<Button onClick={showBombs}
							        variant="contained"
							        color={color}
											disabled={showBombsBtn !== 'active'}
							>
								{phrases.showBombs}
							</Button>
							<Button onClick={startAutoGame}
							        variant="contained"
							        color={color}
							        disabled={autoGameBtn !== 'active'}
							>
								{phrases.autoGame}
							</Button>
							<Button onClick={startAutoWinGame}
							        variant="contained"
							        color={color}
							        disabled={autoWinBtn !== 'active'}
							>
								{phrases.autoVictory}
							</Button>
							<NavLink to="/game">
								<Button className={style.finishBtn} onClick={() => props.setFieldStatus(false)} variant="contained">
									{phrases.finishTheGame}
								</Button>
							</NavLink>
						</div>
						<div ref={won} className={style.invisible}>
							<div>
								<h3>You have won the game</h3>
								<NavLink to="/game">
									<Button className={style.finishBtn} onClick={() => props.setFieldStatus(false)} variant="contained" color={color}>
										Finish the game
									</Button>
								</NavLink>
							</div>
						</div>
						<div ref={lost} className={style.invisible}>
							<div>
								<h3>You have won the game</h3>
								<NavLink to="/game">
									<Button className={style.finishBtn} onClick={() => props.setFieldStatus(false)} variant="contained" color={color}>
										You have lost the game
									</Button>
								</NavLink>
							</div>
						</div>
					</>
				)}
		</div>
	);
};

export default Game;
