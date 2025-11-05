import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Test Engineer with a strong background in Computational Neuroscience
              and Cognitive Robotics. I'm passionate about ensuring software quality
              through comprehensive testing strategies and data-driven analysis.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, MATLAB, Java, and SQL{" "}
                </b>
              </i>
              — with expertise in automated testing, performance optimization, and data analysis.
              <br />
              <br />
              My areas of expertise include
              <i>
                <b className="purple">
                  {" "}
                  Automated Testing, Brain-Computer Interfaces, Machine Learning,{" "}
                </b>
              </i>
              and cognitive neuroscience research.
              <br />
              <br />
              I specialize in designing
              <b className="purple"> end-to-end test automation frameworks</b>, implementing{" "}
              <i>
                <b className="purple">data-driven testing strategies</b>, and conducting{" "}
                <b className="purple">performance analysis</b> for complex systems.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
