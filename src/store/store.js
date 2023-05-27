import { applyMiddleware, combineReducers, createStore } from "redux"
import AuthReducers from "./reducers/auth/index.js"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export const rootReducer = combineReducers({
    isAuth: AuthReducers
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
