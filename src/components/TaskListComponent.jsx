import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";

function TaskListComponent({todoList, onDelete, handleInputChange, onUpdate}) {
    return(
        <article className="task-list">
            <div className="title">
                <input type='text' value={todoList.name} onChange={(e) => handleInputChange(e)}/>
                <Button variant="info" size="sm" className="delete-button" onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) onDelete(todoList.id)}}>Delete</Button>
            </div>
            <div>
                <Button variant="info" size="sm" className="save-button" onClick={() => onUpdate(todoList.id)}>Save</Button>
            </div>
        </article>
        )


}

export default TaskListComponent;

TaskListComponent.propTypes = {
    todoList: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired

};