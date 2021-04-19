const SET_SECONDS = 'SET_SECONDS';
const SET_OPEN_CELLS = 'SET_OPEN_CELLS';
const SET_OPEN_CELLS_HACKED = 'SET_OPEN_CELLS_HACKED';
const SET_OPEN_CELLS_HACKED_TO_ZERO = 'SET_OPEN_CELLS_HACKED_TO_ZERO';
const SET_OPEN_CELLS_TO_ZERO = 'SET_OPEN_CELLS_TO_ZERO';

const initialState = {
	seconds: 0 as number,
	openCells: 0 as number,
	openCellsHacked: 0 as number,
	recordTime: 0 as number,
	recordLevel: 0 as number,
};

type initialStateType = typeof initialState;

const currentGameStatisticReducer = (state = initialState, action: any): initialStateType => {
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
	case SET_OPEN_CELLS_HACKED:
		return {
			...state,
			openCellsHacked: state.openCells + action.newOpenCellsHacked,
		};
	case SET_OPEN_CELLS_HACKED_TO_ZERO:
		return {
			...state,
			openCellsHacked: 0,
		};
	default:
		return state;
	}
};

type setSecondsType = {
	type: typeof SET_SECONDS,
	newSeconds: number,
}

export const setSeconds = (newSeconds: number):setSecondsType => ({
	type: SET_SECONDS,
	newSeconds,
});

type setOpenCellsType = {
	type: typeof SET_OPEN_CELLS,
	newOpenCells: number,
}

export const setOpenCells = (newOpenCells: number): setOpenCellsType => ({
	type: SET_OPEN_CELLS,
	newOpenCells,
});

type setOpenCellsToZeroType = {
	type: typeof SET_OPEN_CELLS_TO_ZERO,
}

export const setOpenCellsToZero = ():setOpenCellsToZeroType => ({
	type: SET_OPEN_CELLS_TO_ZERO,
});

type setOpenCellsHackedType = {
	type: typeof SET_OPEN_CELLS_HACKED,
	newOpenCellsHacked: number,
}

export const setOpenCellsHacked = (newOpenCellsHacked: number):setOpenCellsHackedType => ({
	type: SET_OPEN_CELLS_HACKED,
	newOpenCellsHacked,
});

export const setOpenCellsHackedToZero = () => ({
	type: SET_OPEN_CELLS_HACKED_TO_ZERO,
});

type sortStatistic = {
	ml: number,
	s: number,
	m: number
}

const checkStatistic = (time: number, level: string) => {
	if (!localStorage.getItem(`record${level}`)) {
		localStorage.setItem(`record${level}`, JSON.stringify([time]));
	} else {
		const arrResult = JSON.parse(localStorage.getItem(`record${level}`)!);
		arrResult.push(time);
		const sorted = arrResult.sort((a: sortStatistic, b: sortStatistic) => (a.ml - b.ml && a.s - b.s
			&& a.m - b.m) || (a.ml - b.ml && a.s - b.s) || a.ml - b.ml);
		if (sorted.length > 10) sorted.pop();
		localStorage.setItem(`record${level}`, JSON.stringify(sorted));
	}
};

export const setStatistic = (time: number, level: number) => {
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
};

export default currentGameStatisticReducer;
