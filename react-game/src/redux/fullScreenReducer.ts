const SET_FULL_SCREEN_STATUS = 'SET_FULL_SCREEN_STATUS';

const initialState = {
	full: false as boolean,
};

type initialStateType = typeof initialState;

const fullScreenReducer = (
	state = initialState,
	action: {type: string, status: boolean},
):initialStateType => {
	switch (action.type) {
	case SET_FULL_SCREEN_STATUS:
		return {
			...state,
			full: action.status,
		};
	default:
		return state;
	}
};

type fullScreenType = {
	type: typeof SET_FULL_SCREEN_STATUS,
	status: boolean,
}

export const setFullScreenStatus = (status: boolean): fullScreenType => ({
	type: SET_FULL_SCREEN_STATUS,
	status,
});

export default fullScreenReducer;
