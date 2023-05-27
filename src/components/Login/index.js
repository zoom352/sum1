import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {fetchLogin} from "../../store/reducers/auth/action-creators";
import Input from "../../UI/Input";
import {useState} from "react";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const onChangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h2>Введите учетные данные</h2>
            <Input
                value={login}
                onChange={onChangeLogin}
                placeholder="Введите логин"
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder="Введите пароль"
            />
            <button
                onClick={() => {
                    dispatch(fetchLogin(login, password, () => navigate("/profile")))
                }}
            >
                Войти
            </button>
        </div>
    )
}

export default Login
