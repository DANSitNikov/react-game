const TOGGLE_SHOW_BTN_STATUS = 'TOGGLE_SHOW_BTN_STATUS';
const TOGGLE_AUTO_GAME_STATUS = 'TOGGLE_AUTO_GAME_STATUS';
const TOGGLE_AUTO_WIN_STATUS = 'TOGGLE_AUTO_WIN_STATUS';
const TOGGLE_ABOUT_GAME_STATUS = 'TOGGLE_ABOUT_GAME_STATUS';
const TOGGLE_GAME_STATUS = 'TOGGLE_GAME_STATUS';
const TOGGLE_RECORDS_STATUS = 'TOGGLE_RECORDS_STATUS';
const TOGGLE_SETTINGS_STATUS = 'TOGGLE_SETTINGS_STATUS';
const TOGGLE_FINISH_STATUS = 'TOGGLE_FINISH_STATUS';

const initialState = {
	showBombsBtn: 'active' as string,
	autoGameBtn: 'active' as string,
	autoWinBtn: 'active' as string,
	aboutGameBtn: 'active' as string,
	gameBtn: 'active' as string,
	recordsBtn: 'active' as string,
	settingsBtn: 'active' as string,
	finishGameBtn: 'active' as string,
};

type initialStateType = typeof initialState;

const buttonsReducer = (state: initialStateType = initialState, action: any): initialStateType => {
	switch (action.type) {
	case TOGGLE_SHOW_BTN_STATUS:
		return {
			...state,
			showBombsBtn: action.status,
		};
	case TOGGLE_AUTO_GAME_STATUS:
		return {
			...state,
			autoGameBtn: action.status,
		};
	case TOGGLE_AUTO_WIN_STATUS:
		return {
			...state,
			autoWinBtn: action.status,
		};
	case TOGGLE_ABOUT_GAME_STATUS:
		return {
			...state,
			aboutGameBtn: action.status,
		};
	case TOGGLE_GAME_STATUS:
		return {
			...state,
			gameBtn: action.status,
		};
	case TOGGLE_RECORDS_STATUS:
		return {
			...state,
			recordsBtn: action.status,
		};
	case TOGGLE_SETTINGS_STATUS:
		return {
			...state,
			settingsBtn: action.status,
		};
	case TOGGLE_FINISH_STATUS:
		return {
			...state,
			finishGameBtn: action.status,
		};
	default:
		return state;
	}
};

type changeShowBombsBtnStatusType = {
	type: typeof TOGGLE_SHOW_BTN_STATUS,
	status: string,
}

export const changeShowBombsBtnStatus = (status: string): changeShowBombsBtnStatusType => ({
	type: TOGGLE_SHOW_BTN_STATUS,
	status,
});

type changeAutoGameStatusType = {
	type: typeof TOGGLE_AUTO_GAME_STATUS,
	status: string,
}

export const changeAutoGameStatus = (status: string): changeAutoGameStatusType => ({
	type: TOGGLE_AUTO_GAME_STATUS,
	status,
});

type changeAutoWinGameStatusType = {
	type: typeof TOGGLE_AUTO_WIN_STATUS,
	status: string,
}

export const changeAutoWinGameStatus = (status: string): changeAutoWinGameStatusType => ({
	type: TOGGLE_AUTO_WIN_STATUS,
	status,
});

type changeAboutGameStatusType = {
	type: typeof TOGGLE_ABOUT_GAME_STATUS,
	status: string,
}

export const changeAboutGameStatus = (status: string): changeAboutGameStatusType => ({
	type: TOGGLE_ABOUT_GAME_STATUS,
	status,
});

type changeGameStatusType = {
	type: typeof TOGGLE_GAME_STATUS,
	status: string,
}

export const changeGameStatus = (status: string): changeGameStatusType => ({
	type: TOGGLE_GAME_STATUS,
	status,
});

type changeRecordsStatusType = {
	type: typeof TOGGLE_RECORDS_STATUS,
	status: string,
}

export const changeRecordsStatus = (status: string): changeRecordsStatusType => ({
	type: TOGGLE_RECORDS_STATUS,
	status,
});

type changeSettingsStatusType = {
	type: typeof TOGGLE_SETTINGS_STATUS,
	status: string,
}

export const changeSettingsStatus = (status: string): changeSettingsStatusType => ({
	type: TOGGLE_SETTINGS_STATUS,
	status,
});

type changeFinishGameStatusType = {
	type: typeof TOGGLE_FINISH_STATUS,
	status: string,
}

export const changeFinishGameStatus = (status: string): changeFinishGameStatusType => ({
	type: TOGGLE_FINISH_STATUS,
	status,
});

export default buttonsReducer;
