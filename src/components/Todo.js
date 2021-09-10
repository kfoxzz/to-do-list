import React, { useState } from 'react';
import { Button, FormCheck, Row, Col } from 'react-bootstrap';

export default function Todo(props) {

    const [completed, setCompleted] = useState(false);

    function handleComplete(e) {
        if (completed === false) {
            props.completeTask(props.id);
            setCompleted(true);
        } else {
            props.incompleteTask(props.id);
            setCompleted(false);
        };
    }

    return (
        <div id={props.id} completed={completed}>
            <Row className="my-3 align-items-center">
                <Col xs="auto">
                    <FormCheck onClick={handleComplete}></FormCheck>
                </Col>
                <Col className="align-items-center">{props.name}</Col>
                <Col xs="auto">
                    <Button variant="secondary" as="input" type="button" value="Remove task" onClick={() => props.deleteTask(props.id, completed)} />
                </Col>
            </Row>
            <hr />
        </div>
  );
}