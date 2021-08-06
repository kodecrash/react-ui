import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Formik, useFormik } from "formik";
import { Button, Row, Col, Form } from 'react-bootstrap';
import * as yup from 'yup';

const ProfileForm = (props) => {

    const profileFormSchema = yup.object().shape({
        username: yup.string().required('Required').max(10, 'Must be 10 characters or less'),
        firstname: yup.string().required('Required'),
        lastname: yup.string().required('Required'),
        email: yup.string().required('Required').email('Enter valid email address'),
        address: yup.string().required('Required'),
        city: yup.string().required('Required'),
        country: yup.string().required('Required'),
        postalCode: yup.number().required('Required').min(6, 'Must be 6 characters')
    });

    const profileFormik = useFormik({
        initialValues: {
            ...props.profileFormValues
        },
        validationSchema: profileFormSchema,
        onSubmit: values => {
          props.handleSubmit(values);
        }
    });

    return (
        <>
            <Formik enableReinitialize >
                <Form  onSubmit={profileFormik.handleSubmit}>
                    <Row>
                        <Col md="3">
                            <Form.Group>
                                <label>Username</label>
                                <Form.Control
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    isInvalid={!!profileFormik.errors.username}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.username}
                                ></Form.Control>
                                {profileFormik.errors.username ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.username}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">
                                    Email address
                                </label>
                                <Form.Control
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    isInvalid={!!profileFormik.errors.email}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.email}
                                ></Form.Control>
                                {profileFormik.errors.email ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.email}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Form.Group>
                                <label>First Name</label>
                                <Form.Control
                                    placeholder="First name"
                                    type="text"
                                    name="firstname"
                                    isInvalid={!!profileFormik.errors.firstname}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.firstname}
                                ></Form.Control>
                                {profileFormik.errors.fistName ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.firstname}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group>
                                <label>Last Name</label>
                                <Form.Control
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastname"
                                    isInvalid={!!profileFormik.errors.lastname}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.lastname}
                                ></Form.Control>
                                {profileFormik.errors.lastname ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.lastname}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Form.Group>
                                <label>Address</label>
                                <Form.Control
                                    placeholder="Home Address"
                                    type="text"
                                    name="address"
                                    isInvalid={!!profileFormik.errors.address}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.address}
                                ></Form.Control>
                                {profileFormik.errors.address ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.address}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Form.Group>
                                <label>City</label>
                                <Form.Control
                                    placeholder="City"
                                    type="text"
                                    name="city"
                                    isInvalid={!!profileFormik.errors.city}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.city}
                                ></Form.Control>
                                {profileFormik.errors.city ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.city}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group>
                                <label>Country</label>
                                <Form.Control
                                    as="select"
                                    custom
                                    name="country"
                                    isInvalid={!!profileFormik.errors.country}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.country}
                                >
                                    <option value="">Select</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Australia">Australia</option>
                                    <option value="England">England</option>
                                </Form.Control>
                                {profileFormik.errors.country ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.country}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group>
                                <label>Postal Code</label>
                                <Form.Control
                                    placeholder="ZIP Code"
                                    type="number"
                                    name="postalCode"
                                    maxLength={6}
                                    isInvalid={!!profileFormik.errors.postalCode}
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.postalCode}
                                ></Form.Control>
                                {profileFormik.errors.postalCode ? (
                                   <Form.Control.Feedback type="invalid">
                                      {profileFormik.errors.postalCode}
                                   </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Form.Group>
                                <label>About Me</label>
                                <Form.Control
                                    cols="80"
                                        placeholder="Here can be your description"
                                    rows="4"
                                    name="aboutme"
                                    as="textarea"
                                    onChange={profileFormik.handleChange}
                                    value={profileFormik.values.aboutme}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center">
                            <Button
                                className="btn-fill pull-right"
                                type="submit"
                                variant="primary"
                            >
                                Update Profile
                            </Button>
                        </Col>
                    </Row>

                    <div className="clearfix"></div>
                </Form>
            </Formik>
        </>


    )

};

export default ProfileForm;