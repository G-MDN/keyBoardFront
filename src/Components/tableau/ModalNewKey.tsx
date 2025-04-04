import { useState } from "react";
import axios from "axios";
import "./ModalNewKey.css";

interface ModalNewKeyProps {
  closeModalKey: () => void;
  addNewEtiquette?: (newKey: EtiquetteProps) => void;
}

interface EtiquetteProps {
  id: number;
  number: number;
  lastname: string;
  address: string;
  status: string;
}

function ModalNewKey({ closeModalKey }: ModalNewKeyProps) {
  const [keyName, setKeyName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState<number | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (number === "") {
      alert("Veuillez choisir un numéro entre 1 et 50");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4242/api/newKey/", {
        number: number,
        lastname: keyName,
        address: address,
        status: "Available",
      });

      console.log("Réponse API après ajout :", response.data);

      if (response.status === 201) {
        const newKey: EtiquetteProps = {
          id: response.data.keyId,
          number: number,
          lastname: keyName,
          address: address,
          status: "Available", // status par défaut
        };

        addNewEtiquette(newKey);
        setKeyName("");
        setAddress("");
        setNumber("");
        closeModalKey();
      }
    } catch (error) {
      alert("Votre trousseau a bien été ajouté");
    }
  };

  return (
    <>
      <div className="overlayModal" onClick={closeModalKey}></div>

      <div className="modalNewKey">
        <div className="containerForm">
          <h2>Ajouter un nouveau trousseau</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Numéro d'emplacement (1-50)"
              value={number}
              onChange={(e) => {
                const value = Number.parseInt(e.target.value, 10);
                if (value >= 1 && value <= 50) {
                  setNumber(value);
                } else {
                  setNumber("");
                }
              }}
              required
              min="1"
              max="50"
            />
            <input
              type="text"
              placeholder="Nom propriétaire"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Adresse logement"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit" className="validateButton">Ajouter</button>
          </form>
          <button type="button" onClick={closeModalKey} className="closeButton">
            ✖
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalNewKey;
