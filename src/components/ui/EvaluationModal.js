import React, {useContext, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import {RadioSelectionGroup} from "../content/RadioSelectionGroup";
import {AppContext} from "../../App";

export const EvaluationModal= (props) => {
    const {showSave} = props;
    const [show, setShow] = useState(false);
    const {state, dispatch} = useContext(AppContext);

    const handleClose = () => {
        dispatch({...state, showEvaluationModal: false})
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <Modal show={state.showEvaluationModal}
               onHide={handleClose}
               backdropClassName="evaluation-backdrop"
               dialogClassName="evaluation-dialog"
               backdrop="static">
            <Modal.Header>
                <Modal.Title as="h3">
                    Path evaluation and features
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RadioSelectionGroup />
            </Modal.Body>
            <Modal.Footer>
                {/*<Button variant="secondary" onClick={handleClose}>*/}
                {/*    Cancel*/}
                {/*</Button>*/}
                <Button
                    disabled={!state.objectiveSelection || !state.subjectiveSelection}
                    variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

