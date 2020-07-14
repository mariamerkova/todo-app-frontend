import React, {Component} from "react";
import LoginComponent from "../components/LoginComponent";
import {Col, Container, Row} from "react-bootstrap";
import RegisterComponent from "../components/RegisterComponent";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: true,
            showRegister: false
        };
    }

    componentDidMount() {
        const authorizationUsernameCookie =  cookies.get('authorizationUsername');
        if(authorizationUsernameCookie !== undefined) {
            this.props.history.push(`/dashboard/${authorizationUsernameCookie}`);
        }
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
                        {this.state.showLogin && <LoginComponent
                            history={this.props.history}
                            onRegisterClick={() => this.setState({ showLogin: false, showRegister: true })}
                        /> }
                        {this.state.showRegister && <RegisterComponent
                            onBackClick={() => this.setState({ showLogin: true, showRegister: false })}
                        /> }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;