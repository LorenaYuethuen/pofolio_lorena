import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import wechatQR from "../Assets/wechat.png";
import { SiWechat } from "react-icons/si";

function WechatModal({ isWhite }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span
        onClick={handleShow}
        style={{ 
          cursor: "pointer",
          color: isWhite ? "white" : "inherit"
        }}
        className={isWhite ? "" : "icon-colour home-social-icons"}
      >
        <SiWechat />
      </span>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#1a1a2e", borderBottom: "1px solid #6c63ff" }}>
          <Modal.Title style={{ color: "#6c63ff" }}>
            微信 WeChat
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1a1a2e", textAlign: "center", padding: "30px" }}>
          <img
            src={wechatQR}
            alt="WeChat QR Code"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
          <p style={{ color: "#fff", marginTop: "20px", fontSize: "16px" }}>
            扫码添加微信: <strong style={{ color: "#6c63ff" }}>lyx319932362584</strong>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WechatModal;

