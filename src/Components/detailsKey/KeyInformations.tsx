import "./KeyInformations.css";

interface DetailProps {
  number: number;
  lastname: string;
  address: string;
  status: string;
}

function KeyInformations({ number, lastname, address, status }: DetailProps) {
  console.log({ number, lastname, address });

  const getStatusColorInfo = (status: string) => {
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
    <div className="containerKeyInformations">
      <p>Clef <strong>N° {number}</strong></p>
      <p>Nom propriétaire: <strong>{lastname}</strong></p>
      <p>Adresse logement: <strong>{address}</strong></p>
      <p className="availability" style={{ backgroundColor: getStatusColorInfo(status)}}>{status}</p>
    </div>
  );
}

export default KeyInformations;
