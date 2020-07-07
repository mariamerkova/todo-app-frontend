import React, {Component} from "react";
import TodoListApi from "../api/TodoListApi";
import TaskListComponent from "../components/TaskListComponent"

class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : []
        }
    }


    componentDidMount() {
        TodoListApi.getAllTodosLists(this.props.match.params.username)
            .then((response => {
                this.setState({
                    todoList : response.data
                })
            }))
    }

    render() {
        return(
            <div>
                {this.state.todoList.map(list => <TaskListComponent key={list.id} todoList={list}/>)}
            </div>
        )
    }

}

export default TaskListContainer;