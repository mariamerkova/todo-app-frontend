import React, {Component} from "react";
import PropTypes from 'prop-types';

function TaskListComponent({todoList}) {
    return(
        <article className="task-list">
            <div className="title">
                {todoList.name}
            </div>
        </article>
        )


}

export default TaskListComponent;

TaskListComponent.propTypes = {
    todoList: PropTypes.object
};