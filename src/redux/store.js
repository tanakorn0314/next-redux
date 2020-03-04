import { createStore, combineReducers } from "redux";
import { UserReducer } from "./user/reducer";

const reducers = combineReducers({
    User: UserReducer
});

export const initialStore = () => {
    return createStore(reducers)
}