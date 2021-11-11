import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../index.css';
import 'animate.css/animate.css';
import { Animated } from "react-animated-css";

export default function Todo(props) {

    const [completed, setCompleted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    function handleComplete(e) {
        if (completed === false) {
            props.completeTask(props.id);
            setCompleted(true);
        } else {
            props.incompleteTask(props.id);
            setCompleted(false);
        };
    }

    function handleClick() {
        const triggerDelete = () => props.deleteTask(props.id, completed);
        const deleteTimeout = setTimeout(() => { triggerDelete() }, 500);
        setIsVisible(false);
    }

    return (
        <Animated animationIn="fadeInUp" animationOut="fadeOutRight" isVisible={isVisible}>
            <div id={props.id} completed={completed}>
                <Row className="my-3">
                    <Col xs="auto">
                        <div className="form-check">
                            <input className="form-check-input checkbox-xl" type="checkbox" onClick={handleComplete}></input>
                        </div>
                    </Col>
                    <Col>{props.name}</Col>
                    <Col xs="auto">
                        <Button variant="secondary" as="input" type="button" value="Remove task" onClick={handleClick} />
                    </Col>
                </Row>
                <hr />
            </div>
        </Animated>
  );
}