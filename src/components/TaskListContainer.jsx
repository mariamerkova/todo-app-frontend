import React, {Component} from "react";
import TodoListApi from "../api/TodoListApi";
import TaskListComponent from "../components/TaskListComponent"
import {Button, Row} from "react-bootstrap";
import PropTypes from 'prop-types';


class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : [],
            selectedList: null
        }
    }

    componentDidMount() {
       this.fetchTodoLists();
    }

    fetchTodoLists = () => {
        TodoListApi.getAllTodosLists(this.props.match.params.username)
            .then((response) => {
                this.setState({
                    todoList: response.data
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

    listClicked = (id) => {
        this.setState({selectedList: id});
        this.props.onClickList(id);
    }

    render() {
        return(<>
                <div>
                    {this.state.todoList.map(list => <div key={list.id} className={`list ${this.state.selectedList === list.id ? 'selected' : ''}`} onClick={() => this.listClicked(list.id)}>{list.name}</div>)}
                </div>
                <div>
                    <Button variant="outline-info" size="sm" onClick={this.addNewTodoList}>+ New List</Button>
                </div>
            </>
        )
    }

}

TaskListContainer.propTypes = {
    onClickList: PropTypes.func.isRequired
}

export default TaskListContainer;





