import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-1">
            <span className="fs-2" bg="Danger">
              Go
            </span>
            my
            <span className="fs-2">co</span>de-
            <span className="fs-2 ">Unic</span>
          </Navbar.Brand>
          <Nav className="className content-space-between fs-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
