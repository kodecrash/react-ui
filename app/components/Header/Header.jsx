import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form , FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header(props) {

    return (
        <Navbar bg="light" variant="light" expand="lg" >
            <Navbar.Toggle onClick={props.toggleSideNav}/>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
             */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto d-inline">
                    <Nav.Link href="#home" className="pl-4 d-inline pr-3" active>Dashboard</Nav.Link>
                    <Nav.Link href="#link" className="d-inline pr-3">Profile</Nav.Link>
                    <Nav.Link href="#link" className="d-inline pr-2">Settings</Nav.Link>
                   
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            {/* </Navbar.Collapse> */}
            <Nav className="ml-auto navbar-nav">
                <Nav.Item>
                   <Nav.Link href="#link" className="d-inline pr-2">  <FontAwesomeIcon icon={faSignOutAlt} size="lg" /> <span className="nav-link-text logout-text pl-1"> Logout </span></Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar >


    )

}


export default Header;