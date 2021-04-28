import { combineReducers, createStore } from 'redux';
import changeLangReducer from './changeLanguageReducer';
import gameReducer from './gameReducer';
import currentGameStatisticReducer from './currentGameStatisticReducer';
import recordsReducer from './recordsReducer';
import styleModeReducer from './styleModeReducer';
import soundReducer from './soundReducer';
import chooseTheDragonReducer from './chooseTheDragonReducer';
import buttonsReducer from './buttonsReducer';
import fullScreenReducer from './fullScreenReducer';

const reducers = combineReducers({
	changeLang: changeLangReducer,
	gamePage: gameReducer,
	currentGameStatistic: currentGameStatisticReducer,
	recordsPage: recordsReducer,
	styleMode: styleModeReducer,
	soundSettings: soundReducer,
	chooseDragon: chooseTheDragonReducer,
	buttonsHandler: buttonsReducer,
	fullScreenHandler: fullScreenReducer,
});

type RootReducer = typeof reducers;
export type GlobalState = ReturnType<RootReducer>;

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsType<
	T extends {[key: string]: (...args: any[]) => any}
	> = ReturnType<PropertiesType<T>>;

const store = createStore(reducers);

export default store;
