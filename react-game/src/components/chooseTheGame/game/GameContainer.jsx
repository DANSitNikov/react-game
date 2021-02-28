import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { finishedGame, setFieldStatus, winnerGame } from '../../../redux/gameReducer';
import { setOpenCells } from '../../../redux/currentGameStatisticReducer';
import Game from './Game';
import { setAngryDragon, setFriendDragon } from '../../../redux/chooseTheDragonReducer';

const GameDataInfo = (props) => {
	useEffect(() => {
		if (localStorage.getItem('friendDragon')) {
			const dragonValue = JSON.parse(localStorage.getItem('friendDragon'));
			props.setFriendDragon(dragonValue);
		}

		if (localStorage.getItem('angryDragon')) {
			const dragonValue = JSON.parse(localStorage.getItem('angryDragon'));
			props.setAngryDragon(dragonValue);
		}
	});

	return <Game {...props}/>
}

const mapStateToProps = (state) => ({
	number: state.gamePage.chosenLevel,
	gameStatus: state.gamePage.disableField,
	openCells: state.currentGameStatistic.openCells,
	soundVolume: state.soundSettings.sound,
	friend: state.chooseDragon.friend,
	bomb: state.chooseDragon.bomb,
});

const GameContainer = connect(mapStateToProps, {
	setFieldStatus,
	setOpenCells,
	finishedGame,
	winnerGame,
	setFriendDragon,
	setAngryDragon,
})(GameDataInfo);

export default GameContainer;
