import React from "react";
import {Formik, Form, Field} from "formik";
import {Button} from "react-bootstrap";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const LoginComponent = (props) => (
    <div>
        <h1 className="signUp">Signup</h1>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({errors, touched}) => (
                <div id="login-component">
                    <Form className="fields" >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field  name="username" className="form-control" />
                            {errors.username && touched.username ? (
                                <div><small className="text-danger">{errors.username}</small></div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                        <Field name="password" className="form-control"/>
                        {errors.password && touched.password ? (
                            <div><small className="text-danger">{errors.password}</small></div>
                        ) : null}
                        </div>
                        <Button variant="outline-primary" onClick={() => props.onRegisterClick() }>You haven't account yet?</Button>
                        <Button variant="outline-primary" type="submit">Login</Button>
                    </Form>
                </div>
            )}
        </Formik>
    </div>
)

export default LoginComponent;