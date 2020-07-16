import React, {Component} from "react";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';


class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : this.props.todoList,
            selectedList: null
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.todoList !== this.props.todoList) {
            this.setState({
                todoList: this.props.todoList,
                selectedList: null
            })
        }
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
                    <Button variant="outline-info" size="sm" onClick={this.props.onAddNewTodoList}>+ New List</Button>
                </div>
            </>
        )
    }

}

TaskListContainer.propTypes = {
    onClickList: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddNewTodoList: PropTypes.func.isRequired
}

export default TaskListContainer;





