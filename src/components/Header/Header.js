import "./header.css";
import logo from "./../../logo.png";
import HeaderBg from "./../../images/header-bg.png";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const active = {
    color: "#ff136f",
    borderBottom: "2px solid #ff136f",
  };
  const navStyle = {
    textDecoration: "none",
    margin: "0 8px",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    textTransform: "Uppercase",
  };
  return (
    <div className="sticky-top">
      <Navbar
        style={{ background: `url(${HeaderBg})`, backgroundRepeat: "repeat" }}
        expand="lg"
      >
        <Container>
          <NavLink
            className="hoverStyle text-decoration-none sm-mb-3"
            to="home"
          >
            <Navbar.Brand className="navBarBrand">
              <img width="80px" src={logo} alt="" />{" "}
              <span className="fw-bold text-white">Coding Club Institute</span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className="hoverStyle"
                style={navStyle}
                activeStyle={active}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="hoverStyle"
                style={navStyle}
                activeStyle={active}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="hoverStyle"
                style={navStyle}
                activeStyle={active}
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="hoverStyle"
                style={navStyle}
                activeStyle={active}
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
