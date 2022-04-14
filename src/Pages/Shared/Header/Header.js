import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo-black.png'

const Header = () => {
  return (
    <div className="mb-5">
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img src={logo} height="30px" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="Home#Services">Services</Nav.Link>
      <Nav.Link href="Home#Exparts">Exparts</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="About">About</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="Login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
};

export default Header;
