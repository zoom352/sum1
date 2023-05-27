import { applyMiddleware, combineReducers, createStore } from "redux"
import AuthReducers from "./reducers/auth/index.js"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export const rootReducer = combineReducers({
    isAuth: AuthReducers
})

const saveStateToLocalStorage = (store) => (next) => (action) => {
    const result = next(action)
    const state = store.getState()

    localStorage.setItem("state", JSON.stringify(state));

    return result;
}


const persistedState = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : {};

export const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk, saveStateToLocalStorage))
);
