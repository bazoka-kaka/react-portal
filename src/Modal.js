import React from "react";
import ReactDom from "react-dom";

const WRAPPER = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 1000,
  background: "rgba(0,0,0,0.7)",
};

const MODAL_CONTENT = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "#fff",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  zIndex: 1000,
};

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={WRAPPER}></div>
      <div style={MODAL_CONTENT}>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
