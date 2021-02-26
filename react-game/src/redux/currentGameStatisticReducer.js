const SET_SECONDS = 'SET_SECONDS';
const SET_OPEN_CELLS = 'SET_OPEN_CELLS';
const SET_OPEN_CELLS_TO_ZERO = 'SET_OPEN_CELLS_TO_ZERO';

const initialState = {
	seconds: 0,
	openCells: 0,
	recordTime: 0,
	recordLevel: 0,
};

const currentGameStatisticReducer = (state = initialState, action) => {
	switch (action.type) {
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

const checkStatistic = (time, level) => {
	if (!localStorage.getItem(`record${level}`)) {
		localStorage.setItem(`record${level}`, JSON.stringify([time]));
	} else {
		const arrResult = JSON.parse(localStorage.getItem(`record${level}`))
		arrResult.push(time);
		const sorted = arrResult.sort((a, b) => a.ml - b.ml && a.s - b.s && a.m - b.m || a.ml - b.ml && a.s - b.s || a.ml - b.ml);
		if (sorted.length > 10) sorted.pop();
		localStorage.setItem(`record${level}`, JSON.stringify(sorted));
	}
};

export const setStatistic = (time, level) => {
	switch (level) {
		case 25:
			return checkStatistic(time, 'easy');
		case 36:
			return checkStatistic(time, 'average');
		case 49:
			return checkStatistic(time, 'hard');
		default:
			return checkStatistic(time, 'impossible');
	}
}

export default currentGameStatisticReducer;
