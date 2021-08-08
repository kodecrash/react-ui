import React, { Component } from 'react';
import LoginForm  from "./LoginForm";
import "./Login.scss";
import { login } from '../../actions/authActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Alert } from 'react-bootstrap';
import { withRouter } from "react-router-dom";


class Login extends Component {

    constructor(props) {
        super(props);
        this.initialvalues = {
            username: '',
            password: '',
        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formValues) {
        this.props.submitLoginForm(formValues).then((data) => {
            console.log('Login Successful', this.props.authData);
            if (this.props.authData && this.props.authData.isLoggedIn) {
                this.props.setToken(true);
                this.props.history.push("/profile");
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                    {
                     (this.props && this.props.authData && this.props.authData.isLoggedIn == false)?
                        <Alert variant='danger' >
                          Invalid username or password
                        </Alert>: null
                    }
               
                 <LoginForm formValues= {this.initialvalues} 
                   handleSubmit={this.handleSubmit}/>
               </div>
            </div>
        )
    }
}


/**
 * mapStateToProps is used for selecting the part of the data
 * from the store that the connected component needs. 
 * @param {*} state 
 * @returns 
 */
 const mapStateToProps = (state) => {
    if (state.auth) {
        return {
            authData: state.auth,
        };
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLoginForm: (data) => dispatch(login(data))
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login);