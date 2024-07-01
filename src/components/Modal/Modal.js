import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClose}  />;
};

const ModalOverlay = (props) => {
  return (
    <div style={{ position: 'fixed', top: '30vh', left: '15%', width: '70%', background: 'white', padding: '1rem', zIndex: 100 }}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("portal-root");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
