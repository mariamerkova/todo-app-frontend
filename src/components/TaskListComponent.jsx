import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {Formik, Form, Field} from 'formik';

function validateRequired(value) {
    let error;
    if (value === null || value === '') {
        error = 'The field is required';
    }
    return error;
}

function TaskListComponent({todoList, onDelete, handleInputChange, onUpdate}) {
    return (
        <article className="task-list">
            <Formik
                initialValues={{
                    name: todoList.name
                }}
                onSubmit={values => {
                    onUpdate(todoList.id)
                }}
            >
                {formik => (
                    <Form>
                        <div className="title">
                            <Field name="name" type='text' validate={validateRequired} value={todoList.name}
                                   onChange={(e) => {formik.handleChange(e); handleInputChange(e)}}/>
                            {formik.errors.name && <div>{formik.errors.name}</div>}
                            <Button variant="info" size="sm" className="delete-button" onClick={() => {
                                if (window.confirm('Are you sure you want to delete this item?')) onDelete(todoList.id)
                            }}>Delete</Button>
                        </div>
                        <div>
                            <Button variant="info" size="sm" className="save-button" type="submit">Save</Button>
                        </div>
                    </Form>
                )}
            </Formik>
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