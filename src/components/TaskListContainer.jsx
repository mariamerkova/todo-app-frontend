import React, {Component} from "react";
import TodoListApi from "../api/TodoListApi";
import TaskListComponent from "../components/TaskListComponent"
import {Button, Row} from "react-bootstrap";


class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : []
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

    render() {
        return(<>
                <div>
                    {this.state.todoList.map(list => <TaskListComponent key={list.id} todoList={list}/>)}
                </div>
                <div>
                    <Button variant="outline-info" size="sm" onClick={this.addNewTodoList}>+ New List</Button>
                </div>
            </>
        )
    }

}

export default TaskListContainer;