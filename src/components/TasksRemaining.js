import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'animate.css/animate.css';

export default function TasksRemaining(props) {

    function displayTasksRemaining() {
        if (props.tasksLeft === 1) {
            return `${props.tasksLeft} task remaining`
        } else {
            return `${props.tasksLeft} tasks remaining`
        }
    }

    return (
        <Row>
            <Col className="text-center">
                {displayTasksRemaining()}
            </Col>
        </Row>
    )
} 