import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './chooseLevel.module.scss';
import gameAction from '../../actions/gameAction';
import currentGameStatisticAction from '../../actions/currentGameStatisticAction';
import buttonsAction from '../../actions/buttonsAction';

const ChooseTheGame: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(gameAction.setFieldStatus(true));
		dispatch(currentGameStatisticAction.setOpenCellsToZero());
		dispatch(currentGameStatisticAction.setOpenCellsHackedToZero());
		dispatch(gameAction.finishedGame(false));
		dispatch(gameAction.winnerGame(false));
		dispatch(buttonsAction.changeShowBombsBtnStatus('active'));
		dispatch(buttonsAction.changeAutoGameStatus('active'));
		dispatch(buttonsAction.changeAutoWinGameStatus('active'));
	}, []);

	return (
		<div className={style.chooseLevel}>
			<NavLink to="/easy-level"><Button onClick={() => dispatch(gameAction.chooseLevel(25))} variant="outline-light">25</Button></NavLink>
			<NavLink to="/average-level"><Button onClick={() => dispatch(gameAction.chooseLevel(36))} variant="outline-light">36</Button></NavLink>
			<NavLink to="/hard-level"><Button onClick={() => dispatch(gameAction.chooseLevel(49))} variant="outline-light">49</Button></NavLink>
			<NavLink to="/impossible-level"><Button onClick={() => dispatch(gameAction.chooseLevel(81))} variant="outline-light">81</Button></NavLink>
		</div>
	);
};

export default ChooseTheGame;
