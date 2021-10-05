import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "./../../images/footer-logo.png";
import Payment from "./../../images/payment.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./footer.css";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import FooterBG from "./../../images/footer-bg.png";

library.add(
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faFacebookF,
  faYoutube,
  faLinkedin
);
const Footer = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "2px solid transparent",
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
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faMapMarkerAlt}
                />{" "}
                Naogaon,Rajshahi,Bangladesh
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faEnvelope}
                />{" "}
                Official: coding.club.pro@gmail.com
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2 social-icon" icon={faPhone} />{" "}
                Helpline: 01763251119(Available:10:00AM to 10.00PM)
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/contact">
                  Contact us
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/courses">
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/policy">
                  Policy
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <img className="img-fluid" src={Payment} alt="" />
          </Col>
        </Row>
        <div>
          <h4 className="text-white text-center">Follow Us</h4>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/groups/codingclubpro2021"
              >
                <FontAwesomeIcon
                  style={{ color: "#3b5998" }}
                  className="me-2 facebook social-icon"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCN4_lBsAguKSGNQmmL9WLsQ?sub_confirmation=1"
              >
                <FontAwesomeIcon
                  className="me-2 youtube social-icon"
                  icon={faYoutube}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/md-rokibul-hasan/"
              >
                <FontAwesomeIcon
                  className="me-2 linkedin social-icon"
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <hr className="mt-2 mb-0 bg-white" />
      <p
        style={{ background: "#000099" }}
        className="m-0 fw-bold py-3  text-white text-center"
      >
        Copyright &copy; All Reserved by{" "}
        <a
          className="text-decoration-none"
          style={{ color: "#ff136f" }}
          target="_blank"
          rel="noreFerrer"
          href="https://www.facebook.com/groups/codingclubpro2021"
        >
          Coding Club pro - programming Community
        </a>{" "}
        in 2021
      </p>
    </div>
  );
};

export default Footer;
