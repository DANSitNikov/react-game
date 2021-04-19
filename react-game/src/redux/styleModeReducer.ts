const TOGGLE_MODE = 'TOGGLE_MODE';

const initialState = {
	mode: 'friendly' as string,
};

type InitialState = typeof initialState;

const styleModeReducer = (state = initialState, action: any): InitialState => {
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

type Mode = {
	type: typeof TOGGLE_MODE,
	mode: string,
}

export const toggleMode = (mode: string): Mode => {
	localStorage.setItem('gameMode', JSON.stringify(mode));
	return {
		type: TOGGLE_MODE,
		mode,
	};
};

export default styleModeReducer;
