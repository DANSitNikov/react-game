const SET_FULL_SCREEN_STATUS = 'SET_FULL_SCREEN_STATUS';

const initialState = () => ({
	full: false,
});

const fullScreenReducer = (state = initialState, action) => {
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

export const setFullScreenStatus = (status) => ({
	type: SET_FULL_SCREEN_STATUS,
	status,
});

export default fullScreenReducer;
