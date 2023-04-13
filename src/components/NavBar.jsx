import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navbar.css";
import imgMage from "../img/mage.png";

const NavBar = () => {
  return (
    <>
      <Navbar className="borderNavbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
          <div>
              <img className="mage" src={imgMage} />
            </div>
            <div className="name">
              <span className="Luri">Luri</span>
              <span className="mago">Mago</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto "></Nav>
            <nav class="navbar">
     <a href="#"  style={{'--i':1}} className="active">Home</a>
     <a href="#" style={{'--i':2}}>About</a>
     <a href="#" style={{'--i':3}}>skills</a>
     <a href="#" style={{'--i':4}}>Portfolio</a>
     <a href="#" style={{'--i':5}}>Contact</a>
          </nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
