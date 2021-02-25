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

const recordsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EASY_LEVEL_RECORDS:
			return {
				...state,
				easyLevel: action.record,
			}
		case SET_AVERAGE_LEVEL_RECORDS:
			return {
				...state,
				averageLevel: action.record,
			}
		case SET_HARD_LEVEL_RECORDS:
			return {
				...state,
				hardLevel: action.record,
			}
		case SET_IMPOSSIBLE_LEVEL_RECORDS:
			return {
				...state,
				impossibleLevel: action.record,
			}
		default:
			return state;
	}
};

export const setEasyLevel = (record) => {
	return {
		type: SET_EASY_LEVEL_RECORDS,
		record
	};
};

export const setAverageLevel = (record) => {
	return {
		type: SET_AVERAGE_LEVEL_RECORDS,
		record
	};
};

export const setHardLevel = (record) => {
	return {
		type: SET_HARD_LEVEL_RECORDS,
		record
	};
};

export const setImpossibleLevel = (record) => {
	return {
		type: SET_IMPOSSIBLE_LEVEL_RECORDS,
		record
	};
};

export default recordsReducer;
