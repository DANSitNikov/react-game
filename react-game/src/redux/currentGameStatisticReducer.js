const SET_MINUTES = 'SET_MINUTES';
const SET_SECONDS = 'SET_SECONDS';
const SET_OPEN_CELLS = 'SET_OPEN_CELLS';
const SET_OPEN_CELLS_TO_ZERO = 'SET_OPEN_CELLS_TO_ZERO';

const initialState = {
	minutes: 0,
	seconds: 0,
	openCells: 0,
};

const currentGameStatisticReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_MINUTES:
		return {
			...state,
			minutes: action.newMinutes,
		};
	case SET_SECONDS:
		return {
			...state,
			seconds: action.newSeconds,
		};
	case SET_OPEN_CELLS:
		return {
			...state,
			openCells: state.openCells + action.newOpenCells,
		};
	case SET_OPEN_CELLS_TO_ZERO:
		return {
			...state,
			openCells: 0,
		};
	default:
		return state;
	}
};

export const setMinutes = (newMinutes) => ({
	type: SET_MINUTES,
	newMinutes,
});

export const setSeconds = (newSeconds) => ({
	type: SET_SECONDS,
	newSeconds,
});

export const setOpenCells = (newOpenCells) => ({
	type: SET_OPEN_CELLS,
	newOpenCells,
});

export const setOpenCellsToZero = () => ({
	type: SET_OPEN_CELLS_TO_ZERO,
});

export default currentGameStatisticReducer;
