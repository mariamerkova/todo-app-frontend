import React, {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import TaskListContainer from "../components/TaskListContainer";
import AuthenticationApi from "../api/AuthenticationApi";
import TodoListApi from "../api/TodoListApi";
import TaskListComponent from "../components/TaskListComponent";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: null
        }
    }

    loadTaskList = (id) => {
        TodoListApi.getSingleTodoList(id)
            .then(response => this.setState({todoList : response.data}));
    }

    render() {
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
                    <Button variant="outline-primary" size="sm" onClick={() => {
                        AuthenticationApi.logout();
                        this.props.history.push(`/`);
                    }}>Logout</Button>
                </Row>
                <Row>
                    <Col className="colLeft" sm={2}>
                        <TaskListContainer match={this.props.match} onClickList={this.loadTaskList}/>
                    </Col>
                    <Col className="colRight" sm={10}>
                        {this.state.todoList !== null ? <TaskListComponent todoList={this.state.todoList} /> : ""}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Dashboard;