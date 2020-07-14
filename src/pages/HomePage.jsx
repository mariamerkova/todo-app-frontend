import React from "react";
import { Button } from "react-bootstrap";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function HomePage(props) {

    const loginPage = () => {
        props.history.push("/login")
    }

    const authorizationUsernameCookie =  cookies.get('authorizationUsername');
    if(authorizationUsernameCookie !== undefined) {
        props.history.push(`/dashboard/${authorizationUsernameCookie}`);
    }

    return <>
        <article id="home-page" className="text-center">
            <img className="logo" src="/images/logo.png" alt="Logo" />
            <h1 className="text">Welcome to Todo App</h1>
            <Button variant="outline-primary" size="lg" onClick={loginPage}>Login</Button>
        </article>
    </>

}

export default HomePage;