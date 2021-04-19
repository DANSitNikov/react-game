export const getFriendHero = (state) => {
	return state.chooseDragon.friend;
};

export const getBombHero = (state) => {
	return state.chooseDragon.bomb;
};

export const getCurrentLanguage = (state) => {
	return state.changeLang;
};

export const getModeStyle = (state) => {
	return state.styleMode.mode;
};

export const getMusicValue = (state) => {
	return state.soundSettings.music;
};

export const getSoundValue = (state) => {
	return state.soundSettings.sound;
}

export const getOpenCellsHacked = (state) => {
	return state.currentGameStatistic.openCellsHacked;
};