import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center">
              <h3>Sign Up</h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="first-name" className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="last-name" className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>
                Already registered? <a href="#">Sign in</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
