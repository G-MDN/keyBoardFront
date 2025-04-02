import { createPortal } from "react-dom";
import ModalNewKey from "./ModalNewKey";
import { useState } from "react";
import "./ModalButton.css";

function ModalButton() {
const [showModal, setShowModal] = useState(false)

  return ( 
    <div>
      <button type="button" 
      onClick={() => setShowModal(true)}
      className="buttonNewKey">
        Ajouter un trousseau
      </button>
      {showModal && createPortal(<ModalNewKey closeModalKey={() => setShowModal(false)}/>, document.body)}
    </div>
  );
}

export default ModalButton;
