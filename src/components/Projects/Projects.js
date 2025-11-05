import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import neuro from "../../Assets/Projects/neuro.png";
import EEG from "../../Assets/Projects/EEG.png";
import tkProject from "../../Assets/Projects/TK_PROJECT.png";
import dissertationPDF from "../../Assets/Dissertation_2418663_CNCR.pdf";
import EEG_PTOJECT_PDF from "../../Assets/情绪调节头盔：基于脑机接口和机器学习（ML）的可交互式音乐疗法实现设备.pdf";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my professional work experience and research projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tkProject}
              title="Taikang Email Task Sorting Platform"
              role="Test Engineer | Jun 2024 – Present"
              highlights={[
                "Designed 17+ end-to-end automated tests",
                "Data-driven testing with CSV & Python",
                "Performance optimization via JMeter",
                "Stress testing & benchmarking"
              ]}
              techStack={["Python", "JMeter", "SQL"]}
              pdfButtonText="View Work Details"
              ghLink="https://github.com/LorenaYuethuen"
            />
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={neuro}
              title="Brain Attention Control Mechanisms"
              role="Project Lead | Nov 2022 – Aug 2023"
              highlights={[
                "Modeled attention control with ADDM",
                "Analyzed cognitive parameters (IOR, NDT, selection rate)",
                "Revealed links between attention strategies and traits"
              ]}
              techStack={["MATLAB", "Bayesian DE-MCMC", "Cognitive Modeling"]}
              pdfLink={dissertationPDF}
              pdfButtonText="View Research Paper"
            />
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={EEG}
              title="Interactive Music Therapy Device"
              role="Project Member | Sep 2020 – Sep 2021"
              highlights={[
                "Collected and analyzed EEG signals under varied music",
                "Developed closed-loop adaptive system for emotion",
                "Integrated Raspberry Pi for real-time neurofeedback",
                "Validated relaxation effects & proposed framework"
              ]}
              techStack={["OpenBCI", "Python", "Raspberry Pi", "BCI + ML"]}
              pdfLink={EEG_PTOJECT_PDF}
              pdfButtonText="View Research Paper"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
