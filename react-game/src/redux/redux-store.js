import { combineReducers, createStore } from 'redux';
import changeLangReducer from './changeLanguageReducer';
import gameReducer from './gameReducer';
import currentGameStatisticReducer from './currentGameStatisticReducer';
import recordsReducer from './recordsReducer';
import styleModeReducer from './styleModeReducer';
import soundReducer from './soundReducer';
import chooseTheDragonReducer from './chooseTheDragonReducer';

const reducers = combineReducers({
	changeLang: changeLangReducer,
	gamePage: gameReducer,
	currentGameStatistic: currentGameStatisticReducer,
	recordsPage: recordsReducer,
	styleMode: styleModeReducer,
	soundSettings: soundReducer,
	chooseDragon: chooseTheDragonReducer,
});

const store = createStore(reducers);

export default store;
