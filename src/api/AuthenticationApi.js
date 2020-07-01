import axios from 'axios';

class AuthenticationApi {
    registerUser(username, password) {
        return axios.post(`http://localhost:8080/register`, {
            username: username,
            password: password
        }, {headers : { 'Content-Type': 'application/json' }})
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/login', {
            headers: {
                authorization: this.createBasicAUnthToken(username,password),
                'Content-Type': 'application/json'
            }})
    }

    createBasicAUnthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username,password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

}

export default new AuthenticationApi();