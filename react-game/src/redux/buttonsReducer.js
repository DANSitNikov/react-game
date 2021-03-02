const TOGGLE_SHOW_BTN_STATUS = 'TOGGLE_SHOW_BTN_STATUS';
const TOGGLE_AUTO_GAME_STATUS = 'TOGGLE_AUTO_GAME_STATUS';
const TOGGLE_AUTO_WIN_STATUS = 'TOGGLE_AUTO_WIN_STATUS';
const TOGGLE_ABOUT_GAME_STATUS = 'TOGGLE_ABOUT_GAME_STATUS';
const TOGGLE_GAME_STATUS = 'TOGGLE_GAME_STATUS';
const TOGGLE_RECORDS_STATUS = 'TOGGLE_RECORDS_STATUS';
const TOGGLE_SETTINGS_STATUS = 'TOGGLE_SETTINGS_STATUS';

const initialState = {
	showBombsBtn: 'active',
	autoGameBtn: 'active',
	autoWinBtn: 'active',
	aboutGameBtn: 'active',
	gameBtn: 'active',
	recordsBtn: 'active',
	settingsBtn: 'active',
};

const buttonsReducer = (state = initialState, action) => {
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
	default:
		return state;
	}
};

export const changeShowBombsBtnStatus = (status) => ({
	type: TOGGLE_SHOW_BTN_STATUS,
	status,
});

export const changeAutoGameStatus = (status) => ({
	type: TOGGLE_AUTO_GAME_STATUS,
	status,
});

export const changeAutoWinGameStatus = (status) => ({
	type: TOGGLE_AUTO_WIN_STATUS,
	status,
});

export const changeAboutGameStatus = (status) => ({
	type: TOGGLE_ABOUT_GAME_STATUS,
	status,
});

export const changeGameStatus = (status) => ({
	type: TOGGLE_GAME_STATUS,
	status,
});

export const changeRecordsStatus = (status) => ({
	type: TOGGLE_RECORDS_STATUS,
	status,
});

export const changeSettingsStatus = (status) => ({
	type: TOGGLE_SETTINGS_STATUS,
	status,
});

export default buttonsReducer;
