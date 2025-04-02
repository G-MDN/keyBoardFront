import Etiquette from "../Components/tableau/Etiquette";
import ModalButton from "../Components/tableau/ModalButton";
import ModalNewKey from "../Components/tableau/ModalNewKey";
import SearchBar from "../Components/tableau/SearchBar";
import TableauTitle from "../Components/tableau/TableauTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tableau.css";

interface TableauProps {
  id: number;
  number: number;
  lastname: string;
  address: string;
  status: string;
}

function Tableau() {
  const [keys, setKeys] = useState<TableauProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const handleKeyClick = (id: number) => {
    navigate(`/detailsKey/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4242/api/key/")
      .then((res) => {
        setKeys(res.data);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  const addNewEtiquette = (newKey: TableauProps) => {
    setKeys((prev) => [...prev, newKey]);
  }

  return (
    <div>
      <div className="tableauHead">
        <TableauTitle />
        <SearchBar />
        <div>
          <ModalButton onClick={() => setShowModal(true)}/>
        </div>
      </div>
      {showModal && (
        <ModalNewKey
          closeModalKey={() => setShowModal(false)}
          addNewEtiquette={addNewEtiquette} // Passer la fonction d'ajout
        />
      )}
      <div className="allEtiquettes">
        {keys.map((key) => {
          return (
            <Etiquette
              key={key.id}
              number={key.number}
              address={key.address}
              lastname={key.lastname}
              status={key.status}
              onClick={() => handleKeyClick(key.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tableau;
