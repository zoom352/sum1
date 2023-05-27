import {useSelector} from "react-redux";

const Profile = () => {
    const {userName} = useSelector(state => state.isAuth)

    return <h1>Вы вошли под профилем - {userName}</h1>
}

export default Profile
