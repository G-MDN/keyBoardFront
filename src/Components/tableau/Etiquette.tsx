import "./Etiquette.css";

interface EtiquetteProps {
  number: number;
  lastname: string;
  address: string;
  status: string;
  onClick?: () => void;
}

function Etiquette({ number, lastname, address, status, onClick}: EtiquetteProps) {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "green";
      case "Borrowed":
        return "red";
        case "Lost":
        return "gray";
    }
  };

  return (
    <div className="etiquette" onClick={onClick}>
      <div className="corde">
        
      </div>
      <div className="contenu">
        <p className="numero">N° {number}</p>
        <p className="nom">{lastname}</p>
        <p className="adresse">{address}</p>
        <p className="availability" style={{ backgroundColor: getStatusColor(status)}}>{status}</p>
      </div>
    </div>
  );
}

export default Etiquette;
