import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import TaskListContainer from "../components/TaskListContainer";
import TaskListComponent from "../components/TaskListComponent";


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
                <Col className="colLeft" sm={2}><TaskListContainer match={props.match}/></Col>
                <Col className="colRight" sm={10}></Col>
            </Row>
        </Container>
    )
}


export default Dashboard;