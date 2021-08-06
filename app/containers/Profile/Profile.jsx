import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ProfileForm from './ProfileForm';
import { saveProfile, getProfile } from '../../actions/profileActions';
import ModalPopup from '../../components/ModalPopup/ModalPopup';

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
        this.handleModalClose = this.handleModalClose.bind(this);

        this.modalOptions = {
            size: 'sm',
            type: 'message',
            title: 'Success',
            content: 'Profile Saved Successfully'
        }
        this.state = {
            modalOpen : false
        };
       
    }

    componentDidMount() {
       this.props.getUserProfile();
    }
   
    handleSubmit(formValues) {
        console.log('Profile form: ', formValues);
        this.props.submitProfileForm(formValues);
        this.setState({ modalOpen: true });
    }

    handleModalClose() {
        this.setState({ modalOpen: false });
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
                       <ProfileForm profileFormValues={this.props.profile} 
                        handleSubmit={this.handleSubmit}
                      />
                    </Card.Body>
                </Card>
                <ModalPopup open={this.state.modalOpen}
                options={this.modalOptions}
                onModalClose={this.handleModalClose}/>
            </>
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
   
    if (state.profile) {
        return {
            profile: state.profile,
        };
    }

    return {
        profile: {
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
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        submitProfileForm: (profileData) => dispatch(saveProfile(profileData)),
        getUserProfile: () => dispatch(getProfile())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);