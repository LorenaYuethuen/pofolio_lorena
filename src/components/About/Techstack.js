import React from "react";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import MATLAB from "../../Assets/TechIcons/MATLAB.png";
import JMETER from "../../Assets/TechIcons/JMTERT.png";
import CPLUS from "../../Assets/TechIcons/CPLUS.png";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import html from "../../Assets/TechIcons/html.png";
import css from "../../Assets/TechIcons/css.png";
import Docker from "../../Assets/TechIcons/Docker.svg";
import NodeJS from "../../Assets/TechIcons/Node.svg";
import MNE from "../../Assets/TechIcons/MNE.png";
import Jupyter from "../../Assets/TechIcons/JupyteNotebook.png";
import Spider from "../../Assets/TechIcons/spider.png";

function Techstack() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-icons">
        <img src={Python} alt="Python" />
        <span className="tech-icons-text">Python</span>
      </div>
      <div className="tech-icons">
        <img src={MATLAB} alt="MATLAB" />
        <span className="tech-icons-text">MATLAB</span>
      </div>
      <div className="tech-icons">
        <img src={Java} alt="Java" />
        <span className="tech-icons-text">Java</span>
      </div>
      <div className="tech-icons">
        <img src={SQL} alt="SQL" />
        <span className="tech-icons-text">SQL</span>
      </div>
      <div className="tech-icons">
        <img src={CPLUS} alt="C++" />
        <span className="tech-icons-text">C++</span>
      </div>
      <div className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <span className="tech-icons-text">JavaScript</span>
      </div>
      <div className="tech-icons">
        <img src={html} alt="html" />
        <span className="tech-icons-text">HTML5</span>
      </div>
      <div className="tech-icons">
        <img src={css} alt="css" />
        <span className="tech-icons-text">CSS3</span>
      </div>
      <div className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <span className="tech-icons-text">React.js</span>
      </div>
      <div className="tech-icons">
        <img src={NodeJS} alt="Node.js" />
        <span className="tech-icons-text">Node.js</span>
      </div>
      <div className="tech-icons">
        <img src={Git} alt="git" />
        <span className="tech-icons-text">Git</span>
      </div>
      <div className="tech-icons">
        <img src={Docker} alt="Docker" />
        <span className="tech-icons-text">Docker</span>
      </div>
      <div className="tech-icons">
        <img src={JMETER} alt="JMeter" />
        <span className="tech-icons-text">JMeter</span>
      </div>
      <div className="tech-icons">
        <img src={Postman} alt="Postman" />
        <span className="tech-icons-text">Postman</span>
      </div>
      <div className="tech-icons">
        <img src={MNE} alt="MNE-Python" />
        <span className="tech-icons-text">MNE-Python</span>
      </div>
      <div className="tech-icons">
        <img src={Spider} alt="Spider" />
        <span className="tech-icons-text">Spider</span>
      </div>
      <div className="tech-icons">
        <img src={Jupyter} alt="Jupyter Notebook" />
        <span className="tech-icons-text">Jupyter Notebook</span>
      </div>
    </div>
  );
}

export default Techstack;
