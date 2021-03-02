import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeGameStatusControl, finishedGame, setFieldStatus, winnerGame } from '../../../redux/gameReducer';
import { setOpenCells, setOpenCellsHacked, setOpenCellsHackedToZero } from '../../../redux/currentGameStatisticReducer';
import Game from './Game';
import { setAngryDragon, setFriendDragon } from '../../../redux/chooseTheDragonReducer';
import {
	changeAboutGameStatus,
	changeAutoGameStatus,
	changeAutoWinGameStatus, changeGameStatus, changeRecordsStatus,
	changeSettingsStatus,
	changeShowBombsBtnStatus
} from '../../../redux/buttonsReducer';

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

	return <Game {...props} />;
};

const mapStateToProps = (state) => ({
	number: state.gamePage.chosenLevel,
	disableField: state.gamePage.disableField,
	openCells: state.currentGameStatistic.openCells,
	openCellsHacked: state.currentGameStatistic.openCellsHacked,
	soundVolume: state.soundSettings.sound,
	friend: state.chooseDragon.friend,
	bomb: state.chooseDragon.bomb,
	showBombsBtn: state.buttonsHandler.showBombsBtn,
	autoGameBtn: state.buttonsHandler.autoGameBtn,
	autoWinBtn: state.buttonsHandler.autoWinBtn,
	mode: state.styleMode.mode,
	language: state.changeLang,
	gameStatus: state.gamePage.gameStatus,
});

const GameContainer = connect(mapStateToProps, {
	setFieldStatus,
	setOpenCells,
	finishedGame,
	winnerGame,
	setFriendDragon,
	setAngryDragon,
	changeShowBombsBtnStatus,
	changeAutoGameStatus,
	changeAutoWinGameStatus,
	changeAboutGameStatus,
	changeGameStatus,
	changeRecordsStatus,
	changeSettingsStatus,
	changeGameStatusControl,
	setOpenCellsHacked,
})(GameDataInfo);

export default GameContainer;
