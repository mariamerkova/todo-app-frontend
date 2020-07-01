import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Dashboard(props) {
    return (
        <Container fluid>
            <Row>
                <Col className="bg-light">
                    <Navbar bg="light">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <Navbar.Brand>Hello</Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col className="colLeft" sm={2}>mimi</Col>
                <Col className="colRight" sm={10}>mimi</Col>
            </Row>
        </Container>
    )
}


export default Dashboard;