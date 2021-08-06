import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Formik, useFormik } from "formik";
import { Button, Row, Col, Form } from 'react-bootstrap';
import * as yup from 'yup';

const LoginForm = (props) => {

    const LoginFormSchema = yup.object().shape({
        username: yup.string().required('Required'),
        password: yup.string().required('Required')
    });

    const LoginFormik = useFormik({
        initialValues: {
            ...props.formValues
        },
        validationSchema: LoginFormSchema,
        onSubmit: values => {
          props.handleSubmit(values);
        }
    });

    return (
        <>
            <Formik >
                <Form  onSubmit={LoginFormik.handleSubmit}>
                    <Row>
                        <Col md="12">
                            <Form.Group>
                                <label><strong>Username</strong></label>
                                <Form.Control
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    isInvalid={!!LoginFormik.errors.username}
                                    onChange={LoginFormik.handleChange}
                                    value={LoginFormik.values.username}
                                ></Form.Control>
                                {LoginFormik.errors.username ? (
                                   <Form.Control.Feedback type="invalid">
                                      {LoginFormik.errors.username}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                     
                    </Row>
                    <Row>
                        <Col md="12">
                            <Form.Group>
                                <label><strong>Password</strong></label>
                                <Form.Control
                                    placeholder="Password here"
                                    type="text"
                                    name="password"
                                    isInvalid={!!LoginFormik.errors.password}
                                    onChange={LoginFormik.handleChange}
                                    value={LoginFormik.values.password}
                                ></Form.Control>
                                {LoginFormik.errors.password ? (
                                   <Form.Control.Feedback type="invalid">
                                      {LoginFormik.errors.password}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                    
                    </Row>
                
                   
                   
                    <Row>
                        <Col md="12" className="text-left">
                            <Button
                                className="btn-fill pull-right"
                                type="submit"
                                variant="primary"
                            >
                                Log In
                            </Button>
                        </Col>
                    </Row>

                    <div className="clearfix"></div>
                </Form>
            </Formik>
        </>


    )

};

export default LoginForm;