import React, { Component } from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <>
                <h2 className="page-heading">Dashboard</h2>
            </>
        )
    }
}

export default connect()(Dashboard)