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
            todoList: null,
            todoListCollection: []
        }
    }

    componentDidMount() {
        this.fetchTodoLists();
    }

    loadTaskList = (id) => {
        TodoListApi.getSingleTodoList(id)
            .then(response => this.setState({todoList : response.data}));
    }

    onDelete = (id) => {
        TodoListApi.deleteTodoList(id);
        this.setState({todoList: null})
        this.fetchTodoLists();
    }

    fetchTodoLists = () => {
        TodoListApi.getAllTodosLists(this.props.match.params.username)
            .then((response) => {
                this.setState({
                    todoListCollection: response.data
                })
            })
    }

    addNewTodoList = () => {
        const todoList = {
            name : 'Untitled List'
        }
        TodoListApi.saveTodoList(todoList);
        this.fetchTodoLists();
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
                        <TaskListContainer todoList={this.state.todoListCollection} onAddNewTodoList={this.addNewTodoList} onClickList={this.loadTaskList}/>
                    </Col>
                    <Col className="colRight" sm={10}>
                        {this.state.todoList !== null ? <TaskListComponent todoList={this.state.todoList} onDelete={(id) => this.onDelete(id)}/> : ""}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Dashboard;