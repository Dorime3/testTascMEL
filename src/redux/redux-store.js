import { combineReducers, createStore } from "redux";
import { heroesReducer } from "./heroesReducer";

const reducers = combineReducers({
    heroesPage: heroesReducer
});

const store = createStore(reducers);


export default store;
