import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Hi everyone! I'm <span className="purple">Yuexuan Li</span>, 
            a <span className="purple">Test Engineer</span> at{" "}
            <span className="purple">Beijing Longway Computer Application Technology Development Co., Ltd.</span>
          </p>

          <p style={{ textAlign: "justify", lineHeight: "1.8", paddingTop: "15px" }}>
            I specialize in{" "}
            <span className="purple">data-driven testing</span>,{" "}
            <span className="purple">automation</span>, and{" "}
            <span className="purple">performance optimization</span>. 
            My approach combines technical expertise with user-centric thinking to enhance 
            product quality and user experience.
          </p>

          <p style={{ textAlign: "justify", lineHeight: "1.8", paddingTop: "15px" }}>
            I hold an MSc in{" "}
            <span className="purple">Computational Neuroscience and Cognitive Robotics</span> from{" "}
            <span className="purple">University of Birmingham</span>, 
            where I researched attention mechanisms and user behavior—insights I now apply 
            to testing and product development.
          </p>

          <p style={{ textAlign: "justify", lineHeight: "1.8", paddingTop: "20px" }}>
            Beyond work, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Rock Climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ 
            background: "linear-gradient(135deg, #BFA36F 0%, #8C7853 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "500",
            fontSize: "1.1em"
          }}>
            "Driving quality through innovation and attention to detail!"{" "}
          </p>
          <footer className="blockquote-footer" style={{
            color: "#BFA36F",
            fontWeight: "500"
          }}>Yuexuan Li</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
