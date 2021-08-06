import React from "react";
import { Modal, Button } from 'react-bootstrap';

function ModalPopup(props) {
   
    const handleClose = () => {
        props.onModalClose();
    }

    return (
        <Modal
            show={props.open}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.options.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.options.content}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {
                (props.options && props.options.type == 'confirm')?
                <Button variant="primary">Understood</Button>: null
                }
                
            </Modal.Footer>
        </Modal>

    )
}

export default ModalPopup;