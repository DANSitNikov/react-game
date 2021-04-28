import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import gameAction from '../../../actions/gameAction';
import currentGameStatisticAction from '../../../actions/currentGameStatisticAction';
import Game from './Game';
import chooseTheDragonAction from '../../../actions/chooseTheDragonAction';
import buttonAction from '../../../actions/buttonsAction';
import soundAction from '../../../actions/soundAction';
import changeLangAction from '../../../actions/changeLangAction';
import styleModeAction from '../../../actions/styleModeAction';
import { GlobalState } from '../../../redux/redux-store';

const {
	changeShowBombsBtnStatus,
	changeAutoGameStatus,
	changeAutoWinGameStatus,
	changeAboutGameStatus,
	changeGameStatus,
	changeRecordsStatus,
	changeSettingsStatus,
	changeFinishGameStatus,
} = buttonAction;

const {
	setFriendDragon,
	setAngryDragon,
} = chooseTheDragonAction;

const {
	setOpenCellsHacked,
	setOpenCells,
} = currentGameStatisticAction;

const {
	setFieldStatus,
	finishedGame,
	winnerGame,
	changeGameStatusControl,
} = gameAction;

const {
	setEng,
	setRus,
} = changeLangAction;

const {
	changeSoundVolume,
} = soundAction;

const {
	toggleMode,
} = styleModeAction;

const GameDataInfo: React.FC<any> = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage) {
			if (localStorage.getItem('friendDragon')) {
				const dragonValue = JSON.parse(localStorage.getItem('friendDragon')!);
				dispatch(setFriendDragon(dragonValue));
			}

			if (localStorage.getItem('angryDragon')) {
				const dragonValue = JSON.parse(localStorage.getItem('angryDragon')!);
				dispatch(setAngryDragon(dragonValue));
			}

			if (localStorage.getItem('soundVolume')) {
				const sound = JSON.parse(localStorage.getItem('soundVolume')!);
				dispatch(changeSoundVolume(sound));
			}

			if (localStorage.getItem('gameLanguage')) {
				const lang = JSON.parse(localStorage.getItem('gameLanguage')!);
				if (lang === 'rus') {
					dispatch(setRus());
				} else {
					dispatch(setEng());
				}
			}

			if (localStorage.getItem('gameMode')) {
				const mode = JSON.parse(localStorage.getItem('gameMode')!);
				dispatch(toggleMode(mode));
			}
		}
	}, []);

	return <Game {...props} />;
};

const mapStateToProps = (state: GlobalState) => ({
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
	finishedGame,
	winnerGame,
	changeGameStatusControl,
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
	setOpenCellsHacked,
	setOpenCells,
	changeSoundVolume,
	toggleMode,
	setEng,
	setRus,
})(GameDataInfo);

export default GameContainer;
