import style from '../components/chooseTheGame/game/game.module.scss';

const CHOOSE_LEVEL = 'CHOOSE_LEVEL';
const SET_FIELD_STATUS = 'SET_FIELD_STATUS';
const FINISHED_GAME = 'FINISHED_GAME';
const VICTORY_GAME = 'VICTORY_GAME';

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
	victoryGame: false,
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
	case VICTORY_GAME:
		return {
			...state,
			victoryGame: action.status,
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

export const winnerGame = (status) => ({
	type: VICTORY_GAME,
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

export const createGameData = (target, number, bombs) => {
	console.log(typeof target);
	const item = typeof target === 'number'
		? target
		:Number(target.id.split('-')[1]);
	const num = Math.sqrt(number);
	const one = item - num;
	const two = item - num + 1;
	const three = item - num - 1;
	const four = item - 1;
	const five = item + 1;
	const six = item + num;
	const seven = item + num + 1;
	const eight = item + num - 1;
	const bombsCount = [];

	if (item === 1) {
		bombsCount.push(five, seven, six);
	} else if (item === num) {
		bombsCount.push(four, six, eight);
	} else if (item === number - num + 1) {
		bombsCount.push(one, two, five);
	} else if (item === number) {
		bombsCount.push(one, three, four);
	} else if (item > 1 && item < num) {
		bombsCount.push(four, five, six, seven, eight);
	} else if (item > number - num + 1 && item < number) {
		bombsCount.push(one, two, three, four, five);
	} else if ((item - 1) % num === 0) {
		bombsCount.push(one, two, five, six, seven);
	} else if (item % num === 0) {
		bombsCount.push(one, three, four, six, eight);
	} else {
		bombsCount.push(one, two, three, four, five, six, seven, eight);
	}

	let btnText = 0;

	for (let i = 0; i < bombsCount.length; i += 1) {
		if (bombs.includes(bombsCount[i]) && bombsCount[i] > 0) {
			btnText += 1;
		}
	}

	return {
		item, bombsCount, btnText,
	}
};

export const bombsIncludes = (gameField, bombs, bomb) => {
	[...gameField.current.children].forEach((button) => {
		const btnDisabled = button;
		btnDisabled.disabled = true;
		if (bombs.includes(Number(button.id.split('-')[1]))) {
			bomb ? button.classList.add(style.aggressiveOne)
				: button.classList.add(style.aggressiveTwo);
		}
	});
}

export const friendIncludes = (btnText, friend, target) => {
	if (btnText !== 0) {
		target.textContent = `${btnText}`;
	}
	target.disabled = true;
	friend ? target.classList.add(style.friendlyOne)
		: target.classList.add(style.friendlyTwo);
};

export default gameReducer;
