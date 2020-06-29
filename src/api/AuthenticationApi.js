import axios from 'axios';

class AuthenticationApi {
    registerUser(username, password) {
        return axios.post(`http://localhost:8080/register`, {
            username: username,
            password: password
        }, {headers : { 'Content-Type': 'application/json' }})
    }

}

export default new AuthenticationApi();