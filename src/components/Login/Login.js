import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';  // Подключаем файл стилей

export default function Login() {
  const [formData, setFormData] = useState({  
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container fluid className="login-container">
      <Row className="w-100">
        <Col md={4} lg={3} className="mx-auto">
          <Card className="login-card">
            <h3 className="text-center mb-4">Вход</h3>

            <Form>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Введите логин"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-light ${formData.email && "text-warning"}`}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`bg-light ${formData.password && "text-warning"}`}
                  required
                />
              </Form.Group>

              {/* Кнопка Вход */}
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 mb-3 btn-login"
              >
                Вход
              </Button>

              <div className="text-center mb-3">
                <p className="forgot-password">
                  <a href="#">Забыли логин или пароль?</a>
                </p>
              </div>

              <div className="text-center">
                <p>Или войти через</p>
                {/* Кнопка Вход через ТУСУР */}
                <Button 
                  variant="secondary" 
                  className="w-100 btn-tusur"
                >
                  Вход через кабинет ТУСУРа
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
