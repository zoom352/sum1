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

    const onChangeField = (fieldName, e) => {
        setState((prevState) => ({
            ...prevState,
            [fieldName]: e.target.value
        }))
    }

    return (
        <>
            {registered ? <button onClick={() => navigate("/login")}>Перейти на форму логина</button> :
                <div>
                    <div>
                        <span>Имя</span>
                        <input
                            onChange={(e) => onChangeField("name", e)}
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
                            onChange={(e) => onChangeField("username", e)}
                            value={state.username}
                        />
                    </div>
                    <div>
                        <span>Введите пароль</span>
                        <input
                            type="password"
                            onChange={(e) => onChangeField("password", e)}
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
                                onChange={(e) => onChangeField("passwordRepeat", e)}
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
