const ENG = 'ENG';
const RUS = 'RUS';

const initialState = {
	language: {
		rus: {
			settingsHeader: 'Настройки',
			startTheGameHeader: 'Игра',
			recordsHeader: 'Рекорды',
			aboutGameHeader: 'Об игре',
			aboutGameContent: {
				header: 'Сапер: улучшенная версия',
				body: `Удивительный мир the elder scrolls V: Skyrim скрывает в себе много тайн. Это удивительный мир, он полон приключений, опасностей и неожиданных встреч. Но чтобы узнать все тайны, необходимо пройти нерпростое испытание под названием "сапер" с небольшими дополнениями (ради разнообразия). После этого ты получишь книгу или даже несколько (зависит от сложности). Хочешь открыть все тайны этого удивительного мира? Тогда нажимай кнопку "начать играть", выбирай уровень и вперед за тайнами!
				`,
			},
			levels: {
				easy: 'Легко',
				average: 'Средне',
				hard: 'Сложно',
				impossible: 'Невозможно',
			},
			settings: {
				changeLang: 'Сменить на английский',
				changeTheme: 'Сменить тему',
				chooseCharacter: 'Выбрать персонажа',
				musicVolume: 'Громкость музыки',
				soundVolume: 'Громкость звуков',
			},
			game: {
				startGame: 'Начать игру',
				clickToStart: 'Нажми кнопку "начать игру"',
				showBombs: 'Показать бомбы',
				autoGame: 'Авто игра',
				autoVictory: 'Автовыигрышь',
				finishTheGame: 'Закончить игру',
				victory: 'Поздравляю, вы победили!',
				defeat: 'К сожалению вы проиграли',
				hackingVictory: 'Это было не совсем честно. Вы хакер?',
			},
		},
		eng: {
			settingsHeader: 'Settings',
			startTheGameHeader: 'The game',
			recordsHeader: 'Records',
			aboutGameHeader: 'About the game',
			aboutGameContent: {
				header: 'Sapper: update version',
				body: 'The elder scrolls V: skyrim is amazing world. Here you can find so many interesting things. You can meet dragons, skelets, and other strange creatures',
			},
			levels: {
				easy: 'Easy',
				average: 'Average',
				hard: 'Hard',
				impossible: 'Impossible',
			},
			settings: {
				changeLang: 'Change to russian',
				changeTheme: 'Change the theme',
				chooseCharacter: 'Choose the character',
				musicVolume: 'Music volume',
				soundVolume: 'Sound volume',
			},
			game: {
				startGame: 'Start the game',
				clickToStart: 'Click "start the game" button',
				showBombs: 'Show bombs',
				autoGame: 'Auto game',
				autoVictory: 'Auto victory',
				finishTheGame: 'Finish the game',
				victory: 'Nice game. Congrats!',
				defeat: 'Don\'t worry. Next time will be better',
				hackingVictory: 'That\'s not fair victory. Are you a hacker?',
			},
		},
	},
	langStatus: 'rus',
};

const changeLangReducer = (state = initialState, action) => {
	switch (action.type) {
	case RUS:
		return {
			...state,
			langStatus: action.lang,
		};
	case ENG:
		return {
			...state,
			langStatus: action.lang,
		};
	default:
		return state;
	}
};

export const setRus = () => ({
	type: RUS,
	lang: 'rus',
});

export const setEng = () => ({
	type: ENG,
	lang: 'eng',
});

export const setLanguage = (lang) => {
	localStorage.setItem('gameLanguage', JSON.stringify(lang));
};

export default changeLangReducer;
