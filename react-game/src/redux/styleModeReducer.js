const TOGGLE_MODE = 'TOGGLE_MODE';

const initialState = {
	mode: 'friendly',
};

const styleModeReducer = (state = initialState, action) => {
	switch (action.type) {
	case TOGGLE_MODE:
		return {
			...state,
			mode: action.mode,
		};
	default:
		return state;
	}
};

export const toggleMode = (mode) => {
	localStorage.setItem('gameMode', JSON.stringify(mode));
	return {
		type: TOGGLE_MODE,
		mode,
	};
};

export default styleModeReducer;
