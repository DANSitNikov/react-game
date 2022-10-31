import { ActionsType } from './redux-store';
import buttonAction from '../actions/buttonsAction';

const initialState = {
  showBombsBtn: 'active' as string,
  autoGameBtn: 'active' as string,
  autoWinBtn: 'active' as string,
  aboutGameBtn: 'active' as string,
  gameBtn: 'active' as string,
  recordsBtn: 'active' as string,
  settingsBtn: 'active' as string,
  finishGameBtn: 'active' as string,
};

type initialStateType = typeof initialState;
type ActionType = ActionsType<typeof buttonAction>;

const buttonsReducer = (
  state: initialStateType = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case 'TOGGLE_SHOW_BTN_STATUS':
      return {
        ...state,
        showBombsBtn: action.status,
      };
    case 'TOGGLE_AUTO_GAME_STATUS':
      return {
        ...state,
        autoGameBtn: action.status,
      };
    case 'TOGGLE_AUTO_WIN_STATUS':
      return {
        ...state,
        autoWinBtn: action.status,
      };
    case 'TOGGLE_ABOUT_GAME_STATUS':
      return {
        ...state,
        aboutGameBtn: action.status,
      };
    case 'TOGGLE_GAME_STATUS':
      return {
        ...state,
        gameBtn: action.status,
      };
    case 'TOGGLE_RECORDS_STATUS':
      return {
        ...state,
        recordsBtn: action.status,
      };
    case 'TOGGLE_SETTINGS_STATUS':
      return {
        ...state,
        settingsBtn: action.status,
      };
    case 'TOGGLE_FINISH_STATUS':
      return {
        ...state,
        finishGameBtn: action.status,
      };
    default:
      return state;
  }
};

export default buttonsReducer;
