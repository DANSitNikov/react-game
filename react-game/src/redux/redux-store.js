import { combineReducers, createStore } from 'redux';
import changeLangReducer from './changeLanguageReducer';
import gameReducer from './gameReducer';
import currentGameStatisticReducer from './currentGameStatisticReducer';
import recordsReducer from './recordsReducer';
import styleModeReducer from './styleModeReducer';

const reducers = combineReducers({
	changeLang: changeLangReducer,
	gamePage: gameReducer,
	currentGameStatistic: currentGameStatisticReducer,
	recordsPage: recordsReducer,
	styleMode: styleModeReducer,
});

const store = createStore(reducers);

export default store;
