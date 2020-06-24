import React, {Component} from "react";
import LoginComponent from "../components/LoginComponent";
import {Col, Container, Row} from "react-bootstrap";
import RegisterComponent from "../components/RegisterComponent";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: true,
            showRegister: false
        };
    }

    render() {
        return (
            <Container id="login-page">
                <Row>
                    <Col>
                        <img className="logo" src="/images/logo.png" alt="Logo"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        {this.state.showLogin && <LoginComponent onRegisterClick={() => this.setState({ showLogin: false, showRegister: true })}/> }
                        {this.state.showRegister && <RegisterComponent onBackClick={() => this.setState({ showLogin: true, showRegister: false })}/> }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;