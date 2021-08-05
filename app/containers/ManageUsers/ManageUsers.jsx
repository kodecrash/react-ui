import React, { Component } from 'react'
import {connect} from 'react-redux';

class ManageUsers extends Component {
    render() {
        return (
            <>
                <h2 className="page-heading">Manage Users</h2>
            </>
        )
    }
}

export default connect()(ManageUsers);