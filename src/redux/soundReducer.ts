import { ActionsType } from './redux-store';
import soundAction from '../actions/soundAction';

const initialState = {
  music: 50 as number | number[],
  sound: 50 as number | number[],
};

type InitialState = typeof initialState;
type ActionType = ActionsType<typeof soundAction>;

const soundReducer = (
  state = initialState,
  action: ActionType,
): InitialState => {
  switch (action.type) {
    case 'CHANGE_MUSIC_VOLUME':
      return {
        ...state,
        music: action.volume,
      };
    case 'CHANGE_SOUND_VOLUME':
      return {
        ...state,
        sound: action.volume,
      };
    default:
      return state;
  }
};

export default soundReducer;
