import React, {useState, useEffect} from "react"
import UserService from "../../Api/UserService"
import {useNavigate} from "react-router-dom";


const Registration = () => {
    const [users, setUsers] = useState([])
    const [state, setState] = useState({
        name: "",
        username: "",
        password: "",
        passwordRepeat: ""
    })
    const [registered, setRegistered] = useState(false)
    const existLogin = users.find(item => item.username === state.username)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const response = await UserService.getUsers()
            setUsers(response.data)
        }

        fetchData()
    }, [])

    const registrationClick = () => {
        if (
            existLogin
            || state.passwordRepeat !== state.password
            || !state.passwordRepeat.length
            || !state.password.length
            || !state.username.length
            || !state.name.length) {
            window.alert("Форма введена неверно")
        } else {
            window.alert('Успех')
            setRegistered(true)
        }
    }

    const onChangeName = (e) => {
        setState((state) => ({...state, name: e.target.value}))
    }

    const onChangeLogin = (e) => {
        setState((state) => ({...state, username: e.target.value}))
    }

    const onChangePassword = (e) => {
        setState((state) => ({...state, password: e.target.value}))
    }

    const onChangePasswordRepeat = (e) => {
        setState((state) => ({...state, passwordRepeat: e.target.value}))
    }

    return (
        <>
            {registered ? <button onClick={() => navigate("/login")}>Перейти на форму логина</button> :
                <div>
                    <div>
                        <span>Имя</span>
                        <input
                            onChange={onChangeName}
                            value={state.name}
                        />
                    </div>
                    <div>
                        {existLogin && <p style={{color: "red"}}>
                            данный логин уже занят
                            </p>
                        }
                        <span>Логин</span>
                        <input
                            onChange={onChangeLogin}
                            value={state.username}
                        />
                    </div>
                    <div>
                        <span>Введите пароль</span>
                        <input
                            type="password"
                            onChange={onChangePassword}
                            value={state.password}
                        />
                    </div>
                    <div>
                        {state.passwordRepeat !== state.password && state.passwordRepeat.length > 0 && (
                            <p style={{color: "red"}}>не совпадает</p>
                            )}
                            <span>Повторите пароль</span>
                            <input
                                type="password"
                                onChange={onChangePasswordRepeat}
                                value={state.passwordRepeat}
                            />
                    </div>
                    <button onClick={registrationClick}>Зарегестрироваться</button>
                </div>
            }
        </>
    )
}

export default Registration
