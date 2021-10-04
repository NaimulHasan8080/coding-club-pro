import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "./../../images/footer-logo.png";
import Payment from "./../../images/payment.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import FooterBG from "./../../images/footer-bg.png";

library.add(faEnvelope, faMapMarkerAlt, faPhone);
const Footer = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "inline-block",
  };
  return (
    <div
      style={{
        background: `url(${FooterBG})`,
        backgroundRepeat: "repeat",
        padding: "40px 0 0",
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <img width="120px" src={footerLogo} alt="" />
            </div>
            <ul className="list-unstyled mt-3 w-100">
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />{" "}
                Naogaon,Rajshahi,Bangladesh
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2" icon={faEnvelope} /> Official:
                coding.club.pro@gmail.com
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2" icon={faPhone} /> Helpline:
                01763251119(Available:10:00AM to 10.00PM)
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <NavLink style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink style={navStyle} to="/contact">
                  Contact us
                </NavLink>
              </li>

              <li>
                <NavLink style={navStyle} to="/courses">
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink style={navStyle} to="/policy">
                  Policy
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <img className="img-fluid" src={Payment} alt="" />
          </Col>
        </Row>
      </Container>
      <hr className="mt-5 mb-2 bg-white" />
      <p className="m-0 py-2 pb-3 text-white text-center">
        Copyright &copy; All Reserved by Coding Club, 2021
      </p>
    </div>
  );
};

export default Footer;
