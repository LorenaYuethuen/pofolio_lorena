/**
 * ENHANCED HOME COMPONENT
 * Demonstrates the new design system with:
 * - Deep atmospheric styling (jazz bar meets AI dashboard)
 * - Glass-morphism effects
 * - Smooth animations and transitions
 * - Responsive layout with generous spacing
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import WechatModal from "../WechatModal";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* Hero Section with Ambient Reveal Animation */}
      <Container fluid className="home-section hero" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Left Column: Text Content with Fade Slide Animation */}
            <Col md={7} className="home-header fade-slide-left">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name text-accent-gold"> YUEXUAN LI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="delay-200">
                <Type />
              </div>
            </Col>

            {/* Right Column: Image with Fade Slide Animation */}
            <Col md={5} style={{ paddingBottom: 20 }} className="fade-slide-right delay-300">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid ambient-reveal"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Section */}
      <Home2 />

      {/* Social Links Section with Glass Surface */}
      <Container className="fade-slide-up delay-400">
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1 className="text-accent-gold">Find Me On</h1>
            <p>
              Feel free to <span className="text-accent-cyan">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LorenaYuethuen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yuexuan-li-ab84b1283"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lorena_yuethuen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram Profile"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <WechatModal />
              </li>
              <li className="social-icons">
                <a
                  href="mailto:LorenaYxl@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email me"
                  aria-label="Send Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

