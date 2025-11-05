import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "220px", objectFit: "cover", width: "100%" }} />
      <Card.Body style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
        <Card.Title style={{ fontSize: "1.3em", marginBottom: "10px", fontWeight: "600" }}>
          {props.title}
        </Card.Title>
        
        {props.role && (
          <p style={{ 
            color: "#c770f0", 
            fontSize: "0.8em", 
            marginBottom: "15px",
            fontWeight: "500"
          }}>
            {props.role}
          </p>
        )}
        
        {/* Key highlights as bullet points */}
        {props.highlights && (
          <ul style={{ 
            listStyleType: "none", 
            paddingLeft: "0",
            marginBottom: "18px",
            fontSize: "0.95em",
            lineHeight: "2"
          }}>
            {props.highlights.map((item, index) => (
              <li key={index} style={{ 
                marginBottom: "10px",
                paddingLeft: "22px",
                position: "relative"
              }}>
                <span style={{ 
                  position: "absolute", 
                  left: "0", 
                  color: "#c770f0",
                  fontWeight: "bold",
                  fontSize: "1.1em"
                }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        )}
        
        {/* Tech stack tags */}
        {props.techStack && (
          <div style={{ marginBottom: "15px" }}>
            {props.techStack.map((tech, index) => (
              <span key={index} style={{
                display: "inline-block",
                backgroundColor: "rgba(108, 99, 255, 0.15)",
                color: "#c770f0",
                padding: "5px 12px",
                borderRadius: "14px",
                fontSize: "0.85em",
                marginRight: "8px",
                marginBottom: "8px",
                border: "1px solid rgba(108, 99, 255, 0.3)",
                fontWeight: "500"
              }}>
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Button container with auto margin top to push to bottom */}
        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
          {/* PDF Preview Button */}
          {props.pdfLink && (
            <Button 
              variant="primary" 
              href={props.pdfLink} 
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <AiOutlineFilePdf /> &nbsp;
              {props.pdfButtonText || "View Details"}
            </Button>
          )}
          
          {/* GitHub or other link */}
          {props.ghLink && !props.pdfLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
            >
              <BsFileEarmarkText /> &nbsp;
              {"View Project"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
