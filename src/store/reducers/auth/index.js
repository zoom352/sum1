import { AuthActionTypes } from "./types"

const initialState = {
    isAuth: false,
    userName: ""
}

const AuthReducers = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case AuthActionTypes.USER_NAME:
            return { ...state, userName: action.payload }

        default:
            return state
    }
}

export default AuthReducers
