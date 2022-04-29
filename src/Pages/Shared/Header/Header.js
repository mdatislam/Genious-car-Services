import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../images/logo-black.png'

const Header = () => {
  const [user]=useAuthState(auth);
  const handleSingOut=()=>{
    signOut(auth)
  }
  return (
    <div className="">
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/Home">
    <img src={logo} height="30px" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="Home#Services">Services</Nav.Link>
      <Nav.Link href="Home#Expart">Expart</Nav.Link>
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
      {
        user && <>
        <Nav.Link as={Link} to="AddService">Add Service</Nav.Link>
        <Nav.Link as={Link} to="ManageService">Manage Service</Nav.Link>
        <Nav.Link as={Link} to="OrderList">Order-List</Nav.Link>
        </>
      }
      
      { user ?
      <button onClick={handleSingOut} className="btn btn-info" >Sing-Out</button>
      :
      <Nav.Link eventKey={2} as={Link} to="Login">Login</Nav.Link>
      }
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
};

export default Header;
