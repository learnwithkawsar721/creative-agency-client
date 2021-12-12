import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../asset/images/logo.png";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav_bg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Our Protfolio</Nav.Link>
            <Nav.Link href="#pricing">Our Team</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing" className="">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
