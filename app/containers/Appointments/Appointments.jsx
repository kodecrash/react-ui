import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { getAllAppointments } from '../../actions/appointmentActions';
import Table from '../../components/Table/Table';

class Appointments extends Component {

    constructor(props) {
        super(props);
        this.columns = [{
            dataField: 'patientName',
            text: 'Patient Name',
            sort: true
        }, {
            dataField: 'startTime',
            text: 'Start Time',
            sort: true
        }, {
            dataField: 'endTime',
            text: 'End Time',
            sort: true
        }, {
            dataField: 'statusText',
            text: 'Status'
        }];

        this.options =  {
            // pageStartIndex: 0,
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };

    }

    componentDidMount() {
        this.props.getAllAppointments();

    }

    componentDidUpdate() {

    }


    render() {
        return (
            <>
                <Card className="page-container">
                    <Card.Header as="h5">
                        <Container fluid={true} className="p-0">
                            <Row>
                                <Col className="pt-2 title" sm={8}>View Appointments</Col>
                                <Col className="action-button" sm={4}> <Button variant="primary">Add new Appointment</Button></Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list-group">
                            {
                                (this.props.appointments && this.props.appointments.length > 0) ?
                                    <Table id="appointemt-list"
                                     columns={this.columns} data={this.props.appointments} 
                                    config={this.options}/> : null

                            }
                        </ul>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       // dispatching plain actions
//       increment: () => dispatch(getAllAppointments),
//     }
//   }

/**
 * mapStateToProps is used for selecting the part of the data
 * from the store that the connected component needs. 
 * @param {*} state 
 * @returns 
 */
const mapStateToProps = (state) => {
    let appointmentsArr = [];
    if (state.appointments && state.appointments.length > 0) {
        appointmentsArr = state.appointments.map(appointment => {
            if (appointment.status == 1) {
                appointment.statusText = 'Completed';
            } else if (appointment.status == 2) {
                appointment.statusText = 'In Progress';
            } else if (appointment.status == 3) {
                appointment.statusText = 'Cancelled';
            }

            return appointment;
        });
    }

    return {
        appointments: appointmentsArr,
    };
};

export default connect(mapStateToProps, { getAllAppointments })(Appointments)