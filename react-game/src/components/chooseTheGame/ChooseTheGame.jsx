import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import style from './chooseLevel.module.scss';
import { useDispatch } from 'react-redux';
import { chooseLevel, finishedGame, setFieldStatus, winnerGame } from '../../redux/gameReducer';
import { setOpenCellsHackedToZero, setOpenCellsToZero } from '../../redux/currentGameStatisticReducer';
import { changeAutoGameStatus, changeAutoWinGameStatus, changeShowBombsBtnStatus } from '../../redux/buttonsReducer';

const ChooseTheGame = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setFieldStatus(true));
		dispatch(setOpenCellsToZero());
		dispatch(setOpenCellsHackedToZero());
		dispatch(finishedGame(false));
		dispatch(winnerGame(false));
		dispatch(changeShowBombsBtnStatus('active'));
		dispatch(changeAutoGameStatus('active'));
		dispatch(changeAutoWinGameStatus('active'));
	}, []);

	return (
		<div className={style.chooseLevel}>
			<NavLink to="/easy-level"><Button onClick={() => dispatch(chooseLevel(25))} variant="outline-light">25</Button></NavLink>
			<NavLink to="/average-level"><Button onClick={() => dispatch(chooseLevel(36))} variant="outline-light">36</Button></NavLink>
			<NavLink to="/hard-level"><Button onClick={() => dispatch(chooseLevel(49))} variant="outline-light">49</Button></NavLink>
			<NavLink to="/impossible-level"><Button onClick={() => dispatch(chooseLevel(81))} variant="outline-light">81</Button></NavLink>
		</div>
	);
};

export default ChooseTheGame;
