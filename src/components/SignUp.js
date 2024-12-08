import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';  // Подключаем файл стилей

function SignUp() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center">
              <h3>Регистрация</h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="first-name" className="mb-3">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control type="text" placeholder="Введите имя" />
                </Form.Group>
                <Form.Group controlId="last-name" className="mb-3">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control type="text" placeholder="Введите фамилию" />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Электронная почта</Form.Label>
                  <Form.Control type="email" placeholder="Введите электронную почту" />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control type="password" placeholder="Введите пароль" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3 btn-login">Зарегистрироваться</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>
                Уже зарегистрированы? <a href="#">Войти</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
