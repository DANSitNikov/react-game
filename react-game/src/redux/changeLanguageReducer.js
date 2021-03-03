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
				header: 'Сапер: драгон эдишн',
				body: 'Представляю вашему вниманию новую версию игры "Сапер". В игре есть несколько уровней сложности. Данная версия немного проще, чем оригинал, так как у игрока появляется возможность один раз посмотреть на расположение бомб (я думаю, что это просто супер способность). Ваши лучшие результаты игр сохраняются во вкладке "Рекорды". Также с помощью настроек вы можете сменить тему приложения, настроить звук, выбрать язык (английский или русский) и подобрать под себ персонажей. Удачной игры!',
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
				header: 'Sapper: dragon edition',
				body: 'Welcome to the beautiful world of "sapper" in dragon world. This game has four levels, you can chose any of them. I think my game is easier than original, because player has an opportunity to show bombs for half seconds (it\'s just like super power). Your best results are saved in "Records". In settings you can change application theme, adjust sound and music volume, choose language (english or russian) and heroes. Have a good time!',
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
