import { ActionsType } from './redux-store';
import gameAction from '../actions/gameAction';

type Levels = {
	easyLvl: number,
	averageLvl: number,
	hardLvl: number,
	impossible: number,
}

const initialState = {
	levels: {
		easyLvl: 25,
		averageLvl: 36,
		hardLvl: 45,
		impossible: 81,
	} as Levels,
	chosenLevel: 0 as number,
	disableField: true as boolean,
	finishedGame: false as boolean,
	victoryGame: false as boolean,
	gameStatus: 'started' as string,
};

type InitialStateType = typeof initialState;
type ActionType = ActionsType<typeof gameAction>;

const gameReducer = (state = initialState, action: ActionType):InitialStateType => {
	switch (action.type) {
	case 'CHOOSE_LEVEL':
		return {
			...state,
			chosenLevel: action.level,
		};
	case 'SET_FIELD_STATUS':
		return {
			...state,
			disableField: action.status,
		};
	case 'FINISHED_GAME':
		return {
			...state,
			finishedGame: action.status,
		};
	case 'VICTORY_GAME':
		return {
			...state,
			victoryGame: action.status,
		};
	case 'CHANGE_GAME_STATUS':
		return {
			...state,
			gameStatus: action.status,
		};
	default:
		return state;
	}
};

export default gameReducer;
