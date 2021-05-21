import Image from "next/image";

import { Button, Modal, Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function ModalComponent(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Personalize your data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        kdkkdkdk
          <div style={{ backgroundImage: `${props.src}` }}></div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
