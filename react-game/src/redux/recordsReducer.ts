const SET_EASY_LEVEL_RECORDS = 'SET_EASY_LEVEL_RECORDS';
const SET_AVERAGE_LEVEL_RECORDS = 'SET_AVERAGE_LEVEL_RECORDS';
const SET_HARD_LEVEL_RECORDS = 'SET_HARD_LEVEL_RECORDS';
const SET_IMPOSSIBLE_LEVEL_RECORDS = 'SET_IMPOSSIBLE_LEVEL_RECORDS';

const initialState = {
	easyLevel: [],
	averageLevel: [],
	hardLevel: [],
	impossibleLevel: [],
};

const recordsReducer = (state = initialState, action: any) => {
	switch (action.type) {
	case SET_EASY_LEVEL_RECORDS:
		return {
			...state,
			easyLevel: action.record,
		};
	case SET_AVERAGE_LEVEL_RECORDS:
		return {
			...state,
			averageLevel: action.record,
		};
	case SET_HARD_LEVEL_RECORDS:
		return {
			...state,
			hardLevel: action.record,
		};
	case SET_IMPOSSIBLE_LEVEL_RECORDS:
		return {
			...state,
			impossibleLevel: action.record,
		};
	default:
		return state;
	}
};

type Record = {
	m: number
	s: number
	ml: number
}

type EasyLevel = {
	type: typeof SET_EASY_LEVEL_RECORDS,
	record: Array<Record>,
}

export const setEasyLevel = (record: Array<Record>): EasyLevel => ({
	type: SET_EASY_LEVEL_RECORDS,
	record,
});

type AverageLevel = {
	type: typeof SET_AVERAGE_LEVEL_RECORDS,
	record: Array<Record>,
}

export const setAverageLevel = (record: Array<Record>): AverageLevel => ({
	type: SET_AVERAGE_LEVEL_RECORDS,
	record,
});

type HardLevel = {
	type: typeof SET_HARD_LEVEL_RECORDS,
	record: Array<Record>,
}

export const setHardLevel = (record: Array<Record>): HardLevel => ({
	type: SET_HARD_LEVEL_RECORDS,
	record,
});

type ImpossibleLevel = {
	type: typeof SET_IMPOSSIBLE_LEVEL_RECORDS,
	record: Array<Record>,
}

export const setImpossibleLevel = (record: Array<Record>): ImpossibleLevel => ({
	type: SET_IMPOSSIBLE_LEVEL_RECORDS,
	record,
});

export default recordsReducer;
