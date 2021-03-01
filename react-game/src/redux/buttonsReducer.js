const TOGGLE_SHOW_BTN_STATUS = 'TOGGLE_SHOW_BTN_STATUS';
const TOGGLE_AUTO_GAME_STATUS = 'TOGGLE_AUTO_GAME_STATUS';
const TOGGLE_AUTO_WIN_STATUS = 'TOGGLE_AUTO_WIN_STATUS';

const initialState = {
	showBombsBtn: 'active',
	autoGameBtn: 'active',
	autoWinBtn: 'active',
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

export default buttonsReducer;