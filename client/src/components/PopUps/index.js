import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function PopUps(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header style={{textAlign: "center", color: "blue"}} closeButton>
                    {props.techonologies ? ( 
                        <Modal.Title style={{fontSize:"15px", fontWeight: "bold"}}>Tech Used: {props.techonologies}</Modal.Title>
                    ):(
                        null
                    )}
                </Modal.Header>
                <Modal.Body style={{fontSize:"15px", fontWeight: "bold", textAlign: "center", color: "blue"}}>{props.modaltxt}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopUps;