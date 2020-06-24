import React from "react";
import { Button } from "react-bootstrap";

function HomePage(props) {

    const loginPage = () => {
        props.history.push("/loginPage")
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