import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Todo from './Todo';
import TaskInput from './TaskInput';
import { nanoid } from 'nanoid';
import 'animate.css/animate.css';
import { Animated } from "react-animated-css";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [tasksLeft, setTasksLeft] = useState(tasks.length);


  const taskList = tasks.map(task => (
    <Todo id={task.id} name={task.name} key={task.id} deleteTask={deleteTask} completeTask={completeTask} incompleteTask={incompleteTask}/>
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: 'false' };
    setTasks([...tasks, newTask]);
    setTasksLeft(tasksLeft + 1);
  }

  function deleteTask(id, completed) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
    if (completed === true) {
      return;
    } else if (tasksLeft > 0) {
      setTasksLeft(tasksLeft - 1);
    }
  }

  function completeTask(id) {
    const completedTask = document.getElementById(id);
    completedTask.style.textDecoration = 'line-through';
    if (tasksLeft > 0) {
      setTasksLeft(tasksLeft - 1);
    }
  }

  function incompleteTask(id) {
    const taskNotCompleted = document.getElementById(id);
    taskNotCompleted.style.textDecoration = 'none';
    setTasksLeft(tasksLeft + 1);
  }

  return (
    <>
      <Animated animationIn="bounceInRight">
        <Jumbotron>
          <Container className="py-2 mt-3">
            <Row>
              <Col className="text-center">
                <h1 className="display-4">To Do</h1>
                <p>Maybe now I won't be lazy...</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Animated>

      <Animated animationIn="fadeInUpBig">
        <Container className="text-center">
          <TaskInput addTask={addTask} tasksLeft={tasksLeft} />
            {(tasks.length > 0) ? taskList : <p><em>All tasks are complete - add another task to get started! (or take a break after accomplishing so much)</em></p>}
        </Container>
      </Animated>
    </>
  );
}

export default App;
