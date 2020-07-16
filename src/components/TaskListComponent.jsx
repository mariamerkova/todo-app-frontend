import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";

function TaskListComponent({todoList, onDelete}) {
    return(
        <article className="task-list">
            <div className="title">
                {todoList.name}
                <Button variant="info" size="sm" className="delete-button" onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) onDelete(todoList.id)}}>Delete</Button>
            </div>
        </article>
        )


}

export default TaskListComponent;

TaskListComponent.propTypes = {
    todoList: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired

};