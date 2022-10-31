import style from '../components/chooseTheGame/game/game.module.scss';

const gameAction = {
	chooseLevel: (level: number) => ({
		type: 'CHOOSE_LEVEL',
		level,
	} as const),
	setFieldStatus: (status: boolean) => ({
		type: 'SET_FIELD_STATUS',
		status,
	} as const),
	finishedGame: (status:boolean) => ({
		type: 'FINISHED_GAME',
		status,
	} as const),
	winnerGame: (status: boolean) => ({
		type: 'VICTORY_GAME',
		status,
	} as const),
	changeGameStatusControl: (status: string) => ({
		type: 'CHANGE_GAME_STATUS',
		status,
	} as const),
};

export const createElement = (number: number) => {
	const element = [];

	for (let i = 0; i < number; i += 1) {
		element.push(i + 1);
	}

	return element;
};

export const createBombs = (number: number) => {
	const bombs: Array<number> = [];

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

export const createGameData = (target: any, number: number, bombs: Array<number>) => {
	const item = typeof target === 'number'
		? target
		: Number(target.id.split('-')[1]);
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
	};
};

export const bombsIncludes = (gameField: any, bombs: Array<number>, bomb: boolean) => {
	[...gameField.current.children].forEach((button) => {
		const btnDisabled = button;
		btnDisabled.disabled = true;
		if (bombs.includes(Number(button.id.split('-')[1]))) {
			if (bomb) {
				button.classList.add(style.aggressiveOne);
			} else {
				button.classList.add(style.aggressiveTwo);
			}
		}
	});
};

export const friendIncludes = (btnText: number, friend: boolean, target: any) => {
	const currentTarget = target;

	if (btnText !== 0) {
		currentTarget.textContent = `${btnText}`;
	}

	currentTarget.disabled = true;

	if (friend) {
		target.classList.add(style.friendlyOne);
	} else {
		target.classList.add(style.friendlyTwo);
	}
};

export const disableAllBtns = (gameField: any) => {
	[...gameField.current.children].forEach((button) => {
		const btnDisabled = button;
		btnDisabled.disabled = true;
	});
};

export default gameAction;
