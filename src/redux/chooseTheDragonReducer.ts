import { ActionsType } from './redux-store';
import chooseTheDragonAction from '../actions/chooseTheDragonAction';

export const initialState = {
  friend: true as boolean,
  bomb: true as boolean,
};

type initialStateType = typeof initialState;
type ActionType = ActionsType<typeof chooseTheDragonAction>;

const chooseTheDragonReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case 'FRIEND':
      return {
        ...state,
        friend: action.dragon,
      };
    case 'BOMB':
      return {
        ...state,
        bomb: action.dragon,
      };
    default:
      return state;
  }
};

export default chooseTheDragonReducer;
