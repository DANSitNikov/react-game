import { combineReducers, createStore } from "redux";
import changeLangReducer from "./changeLanguageReducer";

const reducers = combineReducers({
	changeLang: changeLangReducer,
});

const store = createStore(reducers);

export default store;