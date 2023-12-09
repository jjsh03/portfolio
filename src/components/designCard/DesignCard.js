import React, { useState } from "react";
import Modal from "react-modal";
import "./style.scss";

export default function DesignCard({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="designCard">
      <div onClick={openModal}>
        <div className="cardHover">
          <p>{data.type}</p>
        </div>
        <img src={data.img} alt="cardImg" className="cardImg" />
      </div>

      <div className="cardText">
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Webview Modal"
        className={{
          base: "modal-enter-animation",
          afterOpen: "modal-entered",
          beforeClose: "",
        }}
        overlayClassName="overlay"
      >
        <main className="modalMain">
          <img
            src={data.modal}
            width="100%"
            height="100%"
            className="modalImg"
            alt="modalImg"
          />
          <button className="modalCloseButton" onClick={closeModal}>
            CLOSE
          </button>
        </main>
      </Modal>
    </div>
  );
}
