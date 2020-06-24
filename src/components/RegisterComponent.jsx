import React from "react";
import {Formik, Form, Field} from "formik";
import {Button} from "react-bootstrap";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),

    confirmPassword: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required')
        .test("passwords-match", "Password must match", function(value) {
        return this.parent.password === value;
            })
});

const RegisterComponent = (props) => (
    <div>
      <h1>Register here:</h1>
        <Formik
            initialValues={{
                username: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({errors, touched}) => (
                <div id="register-component">
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
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" className="form-control"/>
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <div><small className="text-danger">{errors.confirmPassword}</small></div>
                            ) : null}
                        </div>
                        <Button variant="outline-primary" onClick={() => props.onBackClick()}>Back</Button>
                        <Button variant="outline-primary" type="submit" >Register</Button>
                    </Form>
                </div>
            )}
        </Formik>
    </div>
)

export default RegisterComponent;