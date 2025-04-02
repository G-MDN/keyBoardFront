import ActionButton from "../Components/detailsKey/ActionButton";
import ArchiveButton from "../Components/detailsKey/ArchiveButton";
import HistoriqueButton from "../Components/detailsKey/HistoriqueButton";
import HomePageVerticalLigne from "../Components/homePage/HomePageVerticalLigne";
import KeyInformations from "../Components/detailsKey/KeyInformations";
import KeyPhoto from "../Components/detailsKey/KeyPhoto";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./DetailsKey.css";

function DetailsKey() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/key/${id}`)
      .then((res) => {
        console.log("Données reçues:", res.data);
        setDetail(res.data[0]);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, [id]);

  return (
    <div>
      <div className="detailsKeyTop">
        <KeyPhoto />
        <KeyInformations
          key={detail.id}
          number={detail.number}
          lastname={detail.lastname}
          address={detail.address}
          status={detail.status}
        />
        <div className="buttonsDetailsKeyTop">
          <HistoriqueButton />
          <ArchiveButton />
        </div>
      </div>
      <div className="allActionButton">
        <div>
          <ActionButton text="Je prends les clefs" />
          <ActionButton text="Je rends les clefs" />
        </div>
        <div className="verticalLigne">
          <HomePageVerticalLigne />
        </div>
        <div>
          <ActionButton text="Je donne les clefs" />
          <ActionButton text="Je récupère les clefs" />
        </div>
      </div>
    </div>
  );
}

export default DetailsKey;
