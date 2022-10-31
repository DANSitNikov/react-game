import { GlobalState } from '../redux/redux-store';

export const getFriendHero = (state: GlobalState) => state.chooseDragon.friend;

export const getBombHero = (state: GlobalState) => state.chooseDragon.bomb;

export const getCurrentLanguage = (state: GlobalState) => state.changeLang;

export const getModeStyle = (state: GlobalState) => state.styleMode.mode;

export const getMusicValue = (state: GlobalState): number | number[] => state.soundSettings.music;

export const getSoundValue = (state: GlobalState) => state.soundSettings.sound;

export const getOpenCellsHacked = (state: GlobalState) => {
	return state.currentGameStatistic.openCellsHacked;
};
