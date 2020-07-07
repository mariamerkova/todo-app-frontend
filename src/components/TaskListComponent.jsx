import React, {Component} from "react";
import PropTypes from 'prop-types';

function TaskListComponent({todoList}) {
    return(
            <div>
                {todoList.name}
            </div>
        )


}

export default TaskListComponent;

TaskListComponent.propTypes = {
    todoList: PropTypes.object
};