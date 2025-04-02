import { createPortal } from "react-dom";
import ModalPartner from "./ModalPartner";
import { useState } from "react";

import "./ActionButton.css";


interface ButtonAction {
  text: string;
}

function ActionButton({ text }: ButtonAction) {
  const [showModal, setShowModal] = useState(false);


  // Vérifie si le texte du bouton est "Je donne les clefs"
  const handleClick = () => {
    if (text === "Je donne les clefs") {
      setShowModal(true);
    }
  };

  return (
    <div>
      <button type="button" className="actionButton" onClick={handleClick}>
        {text}
      </button>
      {showModal &&
        createPortal(
          <ModalPartner closeModal={() => setShowModal(false)} />,
          document.body,
        )}
    </div>
  );
}

export default ActionButton;
