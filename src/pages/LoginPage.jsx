import React from "react";
import LoginComponent from "../components/LoginComponent";
import {Col, Container, Row} from "react-bootstrap";

function LoginPage() {
    return (
        <Container id="login-page">
            <Row>
                <Col>
                    <img className="logo" src="/images/logo.png" alt="Logo" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <LoginComponent/>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;