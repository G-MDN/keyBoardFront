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
  id?: number;
  number: number;
  lastname: string;
  address: string;
  status: string;
}

function Tableau() {
  const [keys, setKeys] = useState<TableauProps[]>([]);
  const [showModal, setShowModal] = useState(false);
  const totalEtiquettes = 40;

  const navigate = useNavigate();

  const handleKeyClick = (id: number) => {
    navigate(`/detailsKey/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4242/api/key/")
      .then((res) => {
        const keysWithNumbers = res.data.map((key, index) => ({
          ...key,
          number:
            typeof key.number === "number" && key.number > 0
              ? key.number
              : index + 1,
        }));

        const sortedKeys = keysWithNumbers.sort((a, b) => a.number - b.number);
        setKeys(sortedKeys);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  const addNewEtiquette = (newKey: TableauProps) => {
    setKeys((prev) => {
      const updatedKeys = [...prev, newKey];
      return updatedKeys.sort((a, b) => a.number - b.number);
    });
  };

  const createAllEtiquettes = () => {
    const keyMap = new Map();

    // biome-ignore lint/complexity/noForEach: <explanation>
    keys.forEach((key) => {
      if (typeof key.number === "number" && key.number > 0) {
        keyMap.set(key.number, key);
      }
    });

    const result: TableauProps[] = [];
    for (let i = 1; i <= totalEtiquettes; i++) {
      if (keyMap.has(i)) {
        result.push(keyMap.get(i));
      } else {
        result.push({
          lastname: "",
          address: "",
          status: "",
          number: i,
        });
      }
    }

    return result;
  };

  const allEtiquettes = createAllEtiquettes();

  return (
    <div>
      <div className="tableauHead">
        <TableauTitle />
        <SearchBar />
        <div>
          <ModalButton onClick={() => setShowModal(true)} />
        </div>
      </div>
      {showModal && (
        <ModalNewKey
          closeModalKey={() => setShowModal(false)}
          addNewEtiquette={addNewEtiquette}
        />
      )}
      <div className="allEtiquettes">
        {allEtiquettes.map((key, index) => (
          <Etiquette
            key={index}
            number={key.number}
            address={key.address || ""}
            lastname={key.lastname || ""}
            status={key.status || ""}
            onClick={key.id ? () => handleKeyClick(key.id) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default Tableau;
