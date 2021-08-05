import React, { Component } from "react";
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faUserCog, faUser, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import {connect } from 'react-redux';
import { compose } from 'redux';
import { Link , withRouter } from "react-router-dom";

function SideNav(props) {

    const pathname = props.location.pathname;
    console.log('pathname', pathname);
    return (
        <>

            <Nav id="sideNav" className={"d-none d-md-block navbar-dark bg-primary  sidebar " + (props.isOpen ? 'd-block' : '')}
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <div className="sidebar-header">
                    <h3 className="sidenav-logo">React UI</h3>

                    {/* <FontAwesomeIcon icon={faTimes} size="2x" className="nav-close"/> */}
                </div>
                <Nav.Item>
                    <Nav.Link  as={Link} to={"/dashboard"} active={pathname.startsWith('/dashboard')}><FontAwesomeIcon icon={faListAlt} size="lg" />  <span className="nav-link-text pl-2">Master List</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link   as={Link} to={"/appointments"} active={pathname.startsWith('/appointments')}><FontAwesomeIcon icon={faCalendarCheck} size="lg" /> <span className="nav-link-text pl-2">Appointments</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/manageusers"} active={pathname.startsWith('/manageusers')}> <FontAwesomeIcon icon={faUser} size="lg" /> <span className="nav-link-text pl-2">Manage Users</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/profile"} active={pathname.startsWith('/profile')}> <FontAwesomeIcon icon={faUser} size="lg" /> <span className="nav-link-text pl-2">Profile</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled as={Link} to={"/admin"}>
                        <FontAwesomeIcon icon={faUserCog} size="lg" /> <span className="nav-link-text pl-1">Administration </span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        </>

    )

}


export default compose(
    withRouter,
    connect((store)=>{
        return store
    })
)(SideNav);