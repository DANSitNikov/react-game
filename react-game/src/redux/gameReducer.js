const CHOOSE_LEVEL = 'CHOOSE_LEVEL';
const SET_FIELD_STATUS = 'SET_FIELD_STATUS';
const FINISHED_GAME = 'FINISHED_GAME';

const initialState = {
	levels: {
		easyLvl: 25,
		averageLvl: 36,
		hardLvl: 45,
		impossible: 81,
	},
	chosenLevel: 0,
	disableField: true,
	finishedGame: false,
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
	case CHOOSE_LEVEL:
		return {
			...state,
			chosenLevel: action.level,
		};
	case SET_FIELD_STATUS:
		return {
			...state,
			disableField: action.status,
		};
	case FINISHED_GAME:
		return {
			...state,
			finishedGame: action.status,
		};
	default:
		return state;
	}
};

export const chooseLevel = (level) => ({
	type: CHOOSE_LEVEL,
	level,
});

export const setFieldStatus = (status) => ({
	type: SET_FIELD_STATUS,
	status,
});

export const finishedGame = (status) => ({
	type: FINISHED_GAME,
	status,
});

export const createElement = (number) => {
	const element = [];

	for (let i = 0; i < number; i += 1) {
		element.push(i + 1);
	}

	return element;
};

export const createBombs = (number) => {
	const bombs = [];

	for (let i = 0; i < Math.ceil((number / 100) * 15); i += 1) {
		const addNum = Math.round(Math.random() * (number - 1)) + 1;
		if (bombs.includes(addNum)) {
			i -= 1;
		} else {
			bombs.push(addNum);
		}
	}

	return bombs;
};

export default gameReducer;
