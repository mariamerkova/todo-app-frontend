import React, {Component} from "react";
import {Formik, Form, Field} from "formik";
import {Button} from "react-bootstrap";
import * as Yup from 'yup';
import AuthenticationApi from "../api/AuthenticationApi";

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

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    render() {
        return (
            <div>
                <h1 className="signUp">Signup</h1>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        AuthenticationApi
                            .executeBasicAuthenticationService(values.username, values.password)
                            .then(() => {
                                AuthenticationApi.registerSuccessfulLogin(values.username, values.password);
                                this.props.history.push(`/dashboard/${values.username}`);
                            }).catch(() => {
                                this.setState({
                                    showSuccessMessage: false,
                                    hasLoginFailed: true
                                })
                        })
                    }}
                >
                    {({errors, touched}) => (
                        <div id="login-component">
                            <Form className="fields">
                                <div className="form-group">
                                    {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                                    <label htmlFor="username">Username</label>
                                    <Field name="username" className="form-control"/>
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
                                <Button variant="outline-primary" onClick={() => this.props.onRegisterClick()}>You
                                    haven't
                                    account yet?</Button>
                                <Button variant="outline-primary" type="submit">Login</Button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        )
    }
}

export default LoginComponent;