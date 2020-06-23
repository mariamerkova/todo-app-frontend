import React from "react";
import { Button } from "react-bootstrap";

function HomePage(props) {
    return <>
        <article id="home-page" className="text-center">
            <img className="logo" src="/images/logo.png" alt="Logo" />
            <h1 className="text">Welcome to Todo App</h1>
            <Button variant="outline-primary" size="lg">Login</Button>
        </article>
    </>

}

export default HomePage;