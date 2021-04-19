import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
	changeGameStatusControl,
	finishedGame,
	setFieldStatus,
	winnerGame,
} from '../../../redux/gameReducer';
import { setOpenCells, setOpenCellsHacked } from '../../../redux/currentGameStatisticReducer';
import Game from './Game';
import { setAngryDragon, setFriendDragon } from '../../../redux/chooseTheDragonReducer';
import {
	changeAboutGameStatus,
	changeAutoGameStatus,
	changeAutoWinGameStatus,
	changeGameStatus,
	changeRecordsStatus,
	changeSettingsStatus,
	changeShowBombsBtnStatus,
	changeFinishGameStatus,
} from '../../../redux/buttonsReducer';
import { changeSoundVolume } from '../../../redux/soundReducer';
import { setEng, setRus } from '../../../redux/changeLanguageReducer';
import { toggleMode } from '../../../redux/styleModeReducer';

const GameDataInfo = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage) {
			if (localStorage.getItem('friendDragon')) {
				const dragonValue = JSON.parse(localStorage.getItem('friendDragon'));
				dispatch(setFriendDragon(dragonValue));
			}

			if (localStorage.getItem('angryDragon')) {
				const dragonValue = JSON.parse(localStorage.getItem('angryDragon'));
				dispatch(setAngryDragon(dragonValue));
			}

			if (localStorage.getItem('soundVolume')) {
				const sound = JSON.parse(localStorage.getItem('soundVolume'));
				dispatch(changeSoundVolume(sound));
			}

			if (localStorage.getItem('gameLanguage')) {
				const lang = JSON.parse(localStorage.getItem('gameLanguage'));
				if (lang === 'rus') {
					dispatch(setRus());
				} else {
					dispatch(setEng());
				}
			}

			if (localStorage.getItem('gameMode')) {
				const mode = JSON.parse(localStorage.getItem('gameMode'));
				dispatch(toggleMode(mode));
			}
		}
	}, []);

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
	finishGameBtn: state.buttonsHandler.finishGameBtn,
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
	changeFinishGameStatus,
	changeGameStatusControl,
	setOpenCellsHacked,
	changeSoundVolume,
	setEng,
	setRus,
	toggleMode,
})(GameDataInfo);

export default GameContainer;
