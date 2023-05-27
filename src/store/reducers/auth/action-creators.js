import {AuthActionTypes} from "./types";
import UserService from "../../../Api/UserService";

export const setIsAuth = payload => ({type: AuthActionTypes.SET_AUTH, payload})
export const setUserName = payload => ({type: AuthActionTypes.USER_NAME, payload})

export const fetchLogin = (username, password, callback) => async (dispatch) => {
    const response = await UserService.getUsers()
    const mockUser = response.data.find((user) => {
        return user.username === username && user.password === password
    })
    if(mockUser){
        dispatch(setIsAuth(true))
        callback()
        dispatch(setUserName(username))
    } else {
        window.alert("учетные данные введены неверно")
    }
}
