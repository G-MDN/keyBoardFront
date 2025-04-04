import { useState, useEffect } from "react";
import { SquarePen } from "lucide-react";
import "./KeyInformations.css";
import axios from "axios";

interface DetailProps {
  id: number;
  number: number;
  lastname: string;
  address: string;
  status: string;
  onUpdate: (updatedData: DetailProps) => void;
}

function KeyInformations({
  id,
  number,
  lastname,
  address,
  status,
  onUpdate,
}: DetailProps) {
  const [formData, setFormData] = useState({
    id,
    number,
    lastname,
    address,
    status,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFormData({ id, number, lastname, address, status });
  }, [id, number, lastname, address, status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4242/api/modifKey/${id}`, formData)
      .then((response) => {
        console.log("Clé mise à jour :", response.data);

        onUpdate(formData);

        axios
          .get(`http://localhost:4242/api/key/${id}`)
          .then((res) => {
            if (res.data && res.data.length > 0) {
              onUpdate(res.data[0]);
            }
          })
          .catch((refreshError) => {
            console.error(
              "Erreur lors du rafraîchissement des données :",
              refreshError,
            );
          });

        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de la clé :", error);
      });
  };

  const getStatusColorInfo = (status: string) => {
    switch (status) {
      case "Available":
        return "green";
      case "Borrowed":
        return "red";
      case "Lost":
        return "gray";
      default:
        return "gray";
    }
  };

  return (
    <div className="containerKeyInformations">
      {!isEditing ? (
        <>
          <p>
            Clef <strong>N° {formData.number}</strong>
          </p>
          <p>
            Nom propriétaire: <strong>{formData.lastname}</strong>
          </p>
          <p>
            Adresse logement: <strong>{formData.address}</strong>
          </p>
          <p
            className="availability"
            style={{ backgroundColor: getStatusColorInfo(formData.status) }}
          >
            {formData.status}
          </p>
          <SquarePen onClick={() => setIsEditing(true)} />
        </>
      ) : (
        <form onSubmit={handleSubmit} className="keyInformationsForm">
          <label>
            N° Clef:
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Nom propriétaire:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Adresse logement:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Statut:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Borrowed">Borrowed</option>
              <option value="Lost">Lost</option>
            </select>
          </label>
          <br />
          <button type="submit" className="validateButton">Valider</button>
        </form>
      )}
    </div>
  );
}

export default KeyInformations;
