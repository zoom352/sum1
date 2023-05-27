import axios from "axios";

export default class UserService {
    static getUsers() {
        return axios.get('./users.json')
    }
}
