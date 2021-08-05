import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ProfileForm from './ProfileForm';
import { saveProfile } from '../../actions/profileActions';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.profileFormValues = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            city: '',
            country: '',
            postalCode: '',
            aboutMe: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit(formValues) {
        console.log('Profile form: ', formValues);
        this.props.submitProfileForm(formValues);
    }

    render() {
        return (
            <>
                <Card className="page-container">
                    <Card.Header as="h5">
                        <Container fluid={true} className="p-0">
                            <Row>
                                <Col className="pt-2 title" sm={8}>Profile</Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                       <ProfileForm profileFormValues={this.profileFormValues} 
                        handleSubmit={this.handleSubmit}
                      />
                    </Card.Body>
                </Card>

            </>
        )
    }
}

const mapDispatchToProps = (dispatch) =>  ({

    submitProfileForm: (profileData) => dispatch(saveProfile(profileData))

});
    


export default connect(null, mapDispatchToProps)(Profile);