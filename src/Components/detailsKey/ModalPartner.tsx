import { createPortal } from "react-dom";
import trousseau from "../../assets/trousseau.jpg";
import SearchBarPartner from "./SearchBarPartner";

import "./ModalPartner.css";

interface Modal {
  closeModal: () => void;
}

function ModalPartner({ closeModal }: Modal) {
  // Empêcher la propagation du clic quand on clique sur le contenu
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return createPortal(
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={closeModal} className="overlayModalPartner">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="modalPartner" onClick={handleModalClick}>
        <img src={trousseau} alt="" />
        <button type="button" onClick={closeModal} className="closeButton">
          ✖
        </button>
        <h2>A qui donnez-vous les clefs ?</h2>
        <SearchBarPartner />
      </div>
    </div>,
    document.body,
  );
}

export default ModalPartner;
