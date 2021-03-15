import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import style from './chooseLevel.module.scss';

const ChooseTheGame = (props) => {
	useEffect(() => {
		props.setFieldStatus(true);
		props.setOpenCellsToZero();
		props.setOpenCellsHackedToZero();
		props.finishedGame(false);
		props.winnerGame(false);
		props.changeShowBombsBtnStatus('active');
		props.changeAutoGameStatus('active');
		props.changeAutoWinGameStatus('active');
	}, []);

	return (
		<div className={style.chooseLevel}>
			<NavLink to="/easy-level"><Button onClick={() => props.chooseLevel(25)} variant="outline-light">25</Button></NavLink>
			<NavLink to="/average-level"><Button onClick={() => props.chooseLevel(36)} variant="outline-light">36</Button></NavLink>
			<NavLink to="/hard-level"><Button onClick={() => props.chooseLevel(49)} variant="outline-light">49</Button></NavLink>
			<NavLink to="/impossible-level"><Button onClick={() => props.chooseLevel(81)} variant="outline-light">81</Button></NavLink>
		</div>
	);
};

export default ChooseTheGame;
