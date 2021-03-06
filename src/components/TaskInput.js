import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl, Row, Col } from 'react-bootstrap';
import TasksRemaining from "./TasksRemaining";
import 'animate.css/animate.css';

export default function TaskInput(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName('');
    }

    return (
        <Form className="my-3" onSubmit={handleSubmit}>
            <Row className="justify-content-center">
                <Col xs={8}>
                    <FormGroup>
                        <FormControl placeholder="What do you need to do?" type="text" id="new-todo-input" name="text" value={name} onChange={handleChange}></FormControl>
                    </FormGroup>
                </Col>
                <Col>
                    <div className="d-grid">
                        <Button variant="info" type="submit">Add task</Button>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <TasksRemaining tasksLeft={props.tasksLeft} />
                </Col>
            </Row>
        </Form>
    );
}