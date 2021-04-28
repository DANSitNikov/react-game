import { ActionsType } from './redux-store';
import changeLangAction from '../actions/changeLangAction';

const initialState = {
	language: {
		rus: {
			settingsHeader: 'Настройки' as string,
			startTheGameHeader: 'Игра' as string,
			recordsHeader: 'Рекорды' as string,
			aboutGameHeader: 'Об игре' as string,
			aboutGameContent: {
				header: 'Сапер: драгон эдишн' as string,
				body: 'Представляю вашему вниманию новую версию игры "Сапер". В игре есть несколько уровней сложности. Данная версия немного проще, чем оригинал, так как у игрока появляется возможность один раз посмотреть на расположение бомб (я думаю, что это просто супер способность). Ваши лучшие результаты игр сохраняются во вкладке "Рекорды". Также с помощью настроек вы можете сменить тему приложения, настроить звук, выбрать язык (английский или русский) и подобрать под себ персонажей. Удачной игры!' as string,
			},
			levels: {
				easy: 'Легко' as string,
				average: 'Средне' as string,
				hard: 'Сложно' as string,
				impossible: 'Невозможно' as string,
			},
			settings: {
				changeLang: 'Сменить на английский' as string,
				changeTheme: 'Сменить тему' as string,
				chooseCharacter: 'Выбрать персонажа' as string,
				musicVolume: 'Громкость музыки' as string,
				soundVolume: 'Громкость звуков' as string,
			},
			game: {
				startGame: 'Начать игру' as string,
				clickToStart: 'Нажми кнопку "начать игру"' as string,
				showBombs: 'Показать бомбы' as string,
				autoGame: 'Авто игра' as string,
				autoVictory: 'Автовыигрышь' as string,
				finishTheGame: 'Закончить игру' as string,
				victory: 'Поздравляю, вы победили!' as string,
				defeat: 'К сожалению вы проиграли' as string,
				hackingVictory: 'Это было не совсем честно. Вы хакер?' as string,
			},
		},
		eng: {
			settingsHeader: 'Settings' as string,
			startTheGameHeader: 'The game' as string,
			recordsHeader: 'Records' as string,
			aboutGameHeader: 'About the game' as string,
			aboutGameContent: {
				header: 'Sapper: dragon edition' as string,
				body: 'Welcome to the beautiful world of "sapper" in dragon world. This game has four levels, you can chose any of them. I think my game is easier than original, because player has an opportunity to show bombs for half seconds (it\'s just like super power). Your best results are saved in "Records". In settings you can change application theme, adjust sound and music volume, choose language (english or russian) and heroes. Have a good time!' as string,
			},
			levels: {
				easy: 'Easy' as string,
				average: 'Average' as string,
				hard: 'Hard' as string,
				impossible: 'Impossible' as string,
			},
			settings: {
				changeLang: 'Change to russian' as string,
				changeTheme: 'Change the theme' as string,
				chooseCharacter: 'Choose the character' as string,
				musicVolume: 'Music volume' as string,
				soundVolume: 'Sound volume' as string,
			},
			game: {
				startGame: 'Start the game' as string,
				clickToStart: 'Click "start the game" button' as string,
				showBombs: 'Show bombs' as string,
				autoGame: 'Auto game' as string,
				autoVictory: 'Auto victory' as string,
				finishTheGame: 'Finish the game' as string,
				victory: 'Nice game. Congrats!' as string,
				defeat: 'Don\'t worry. Next time will be better' as string,
				hackingVictory: 'That\'s not fair victory. Are you a hacker?' as string,
			},
		},
	},
	langStatus: 'rus' as string,
};

type initialStateType = typeof initialState;
type ActionType = ActionsType<typeof changeLangAction>;

const changeLangReducer = (state = initialState, action: ActionType): initialStateType => {
	switch (action.type) {
	case 'RUS':
		return {
			...state,
			langStatus: action.lang,
		};
	case 'ENG':
		return {
			...state,
			langStatus: action.lang,
		};
	default:
		return state;
	}
};

export default changeLangReducer;
