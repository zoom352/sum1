import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../store/reducers/auth/action-creators";

const Navbar = (props) => {
    const {
        isAuth
    } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegistrationClick = () => {
        if (isAuth) {
            navigate('/profile')
        }
    }

    return (
        <div className="navbar">
            <div>
                <NavLink
                    exact
                    to="/"
                >
                    На главную
                </NavLink>
            </div>
            <div
                onClick={handleRegistrationClick}>
                <NavLink
                    to="/registration"
                >
                    Регистрация
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={isAuth ? "/profile" : "/login"}
                >
                    Профиль
                </NavLink>
            </div>
            {isAuth && <div onClick={() => dispatch(setIsAuth(false))}>
                <NavLink
                    to="/login"
                >
                    Выйти
                </NavLink>
            </div>}
        </div>
    )
}

export default Navbar
