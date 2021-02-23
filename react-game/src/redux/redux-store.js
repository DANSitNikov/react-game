import { combineReducers, createStore } from 'redux';
import changeLangReducer from './changeLanguageReducer';
import gameReducer from './gameReducer';
import currentGameStatisticReducer from './currentGameStatisticReducer';

const reducers = combineReducers({
	changeLang: changeLangReducer,
	gamePage: gameReducer,
	currentGameStatistic: currentGameStatisticReducer,
});

const store = createStore(reducers);

export default store;
