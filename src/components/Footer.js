import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WechatModal from "./WechatModal";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yuexuan Li</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Lorena</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/LorenaYuethuen"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yuexuan-li-ab84b1283"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/lorena_yuethuen/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons" style={{ display: "flex", alignItems: "center" }}>
              <WechatModal isWhite={true} />
            </li>
            <li className="social-icons">
              <a
                href="mailto:LorenaYxl@outlook.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="Email me"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

