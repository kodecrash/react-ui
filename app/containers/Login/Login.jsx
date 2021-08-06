import React, { Component } from 'react';
import LoginForm  from "./LoginForm";
import "./Login.scss";

class Login extends Component {

    constructor(props) {
        super(props);
        this.initialvalues = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                 <LoginForm formValues= {this.initialvalues} />
               </div>
            </div>
        )
    }
}

export default Login;
