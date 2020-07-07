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
            }}).then(() => {
                this.setupAxiosInterceptors(this.createBasicAUnthToken(username,password));
        })
    }

    createBasicAUnthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username,password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    setupAxiosInterceptors(basicAuthHeader) {


        axios.interceptors.request.use(
            (config) => {
                config.headers.authorization = basicAuthHeader;
                return config
            }
        )
    }

}

export default new AuthenticationApi();