import { ActionsType } from './redux-store';
import styleModeAction from '../actions/styleModeAction';

const TOGGLE_MODE = 'TOGGLE_MODE';

const initialState = {
  mode: 'friendly' as string,
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof styleModeAction>;

const styleModeReducer = (
  state = initialState,
  action: ActionType,
): InitialState => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default styleModeReducer;
