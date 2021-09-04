import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Form, Button, FormGroup, FormControl, FormLabel, FormCheck, Container, Row, Col } from 'react-bootstrap';

function App(props) {
  return (
    <div>

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
        <Row>
          <Col>
            <Form className="my-3">
              <Row>
                <Col xs={8} lg={6}>
                  <FormGroup controlId="formNewTask">
                    <FormControl placeholder="What do you need to do?"></FormControl>
                  </FormGroup>
                </Col>
                <Col>
                  <Button variant="info" as="input" type="button" value="Add task" />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="my-3 align-items-center">
          <Col xs="auto">
            <FormCheck></FormCheck>
          </Col>
          <Col className="align-items-center">
            This is a task
          </Col>
          <Col xs="auto">
            <Button variant="secondary" as="input" type="button" value="Remove task" />
          </Col>
        </Row>
        <hr />
        <Row className="mb-3 align-items-center">
          <Col xs="auto">
            <FormCheck></FormCheck>
          </Col>
          <Col className="align-items-center">
            This is a much longer task. This is a much longer task. This is a much longer task. This is a much longer task. This is a much longer task. This is a much longer task. This is a much longer task. This is a much longer task.
          </Col>
          <Col xs="auto">
            <Button variant="secondary" as="input" type="button" value="Remove task" />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
