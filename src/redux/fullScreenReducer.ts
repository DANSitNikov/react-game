import { ActionsType } from './redux-store';
import fullscreenAction from '../actions/fullscreenAction';

const initialState = {
	full: false as boolean,
};

type initialStateType = typeof initialState;
type ActionType = ActionsType<typeof fullscreenAction>;

const fullScreenReducer = (
	state = initialState,
	action: ActionType,
):initialStateType => {
	switch (action.type) {
	case 'SET_FULL_SCREEN_STATUS':
		return {
			...state,
			full: action.status,
		};
	default:
		return state;
	}
};

export default fullScreenReducer;
