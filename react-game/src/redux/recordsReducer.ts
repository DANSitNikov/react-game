import { ActionsType } from './redux-store';
import recordsAction, { Record } from '../actions/recordsAction';

const initialState = {
	easyLevel: [] as Array<Record>,
	averageLevel: [] as Array<Record>,
	hardLevel: [] as Array<Record>,
	impossibleLevel: [] as Array<Record>,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof recordsAction>

const recordsReducer = (state = initialState, action: ActionType): InitialState => {
	switch (action.type) {
	case 'SET_EASY_LEVEL_RECORDS':
		return {
			...state,
			easyLevel: action.record,
		};
	case 'SET_AVERAGE_LEVEL_RECORDS':
		return {
			...state,
			averageLevel: action.record,
		};
	case 'SET_HARD_LEVEL_RECORDS':
		return {
			...state,
			hardLevel: action.record,
		};
	case 'SET_IMPOSSIBLE_LEVEL_RECORDS':
		return {
			...state,
			impossibleLevel: action.record,
		};
	default:
		return state;
	}
};

export default recordsReducer;
