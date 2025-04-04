import "./ArchiveButton.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ArchiveButtonProps {
  id?: string;
}

function ArchiveButton({ id }: ArchiveButtonProps) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Es-tu sûr de vouloir archiver ce trousseau ?")) return;

    try {
      const response = await axios.delete(
        `http://localhost:4242/api/deletedKey/${id}`,
      );

      if (response.status === 204) {
        alert("Trousseau archivé avec succès !");
        navigate("/tableau");
      } else {
        console.error("Erreur lors de la suppression");
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
    }
  };

  return (
    <button type="button" className="archiveButton" onClick={handleDelete}>
      Archiver ce trousseau
    </button>
  );
}

export default ArchiveButton;
