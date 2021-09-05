import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Todo from './Todo';
import TaskInput from './TaskInput';
import { nanoid } from 'nanoid'

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => (
      <Todo id={task.id} name={task.name} key={task.id} deleteTask={deleteTask} completeTask={completeTask} incompleteTask={incompleteTask} />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: 'false' };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function completeTask(id) {
    const completedTask = document.getElementById(id);
    completedTask.style.textDecoration = 'line-through';
  }

  function incompleteTask(id) {
    const taskNotCompleted = document.getElementById(id);
    taskNotCompleted.style.textDecoration = 'none';
  }

  return (
    <>
      <Jumbotron className="bg-dark">
        <Container className="py-2">
          <Row>
            <Col className="text-light">
              <h1 className="display-4">To Do</h1>
              <p>Maybe now I won't be lazy...</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <TaskInput addTask={addTask} />
        {taskList}
      </Container>
    </>
  );
}

export default App;
