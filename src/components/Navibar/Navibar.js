import React from "react";  
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NaviBar.css"; // Подключение отдельного CSS
import logo from "./img/all logo.svg";  // Логотип

export default function NaviBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Войти
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="custom-button me-3" as={Link} to="/">
            Вход
          </Button>
          <Button variant="primary" className="custom-button" as={Link} to="/signup">
            Регистрация
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
