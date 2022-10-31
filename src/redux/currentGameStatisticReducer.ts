import { ActionsType } from './redux-store';
import currentGameStatisticAction from '../actions/currentGameStatisticAction';

const initialState = {
  seconds: 0 as number,
  openCells: 0 as number,
  openCellsHacked: 0 as number,
  recordTime: 0 as number,
  recordLevel: 0 as number,
};

type initialStateType = typeof initialState;
type ActionType = ActionsType<typeof currentGameStatisticAction>;

const currentGameStatisticReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case 'SET_SECONDS':
      return {
        ...state,
        seconds: action.newSeconds,
      };
    case 'SET_OPEN_CELLS':
      return {
        ...state,
        openCells: state.openCells + action.newOpenCells,
      };
    case 'SET_OPEN_CELLS_TO_ZERO':
      return {
        ...state,
        openCells: 0,
      };
    case 'SET_OPEN_CELLS_HACKED':
      return {
        ...state,
        openCellsHacked: state.openCells + action.newOpenCellsHacked,
      };
    case 'SET_OPEN_CELLS_HACKED_TO_ZERO':
      return {
        ...state,
        openCellsHacked: 0,
      };
    default:
      return state;
  }
};

export default currentGameStatisticReducer;
