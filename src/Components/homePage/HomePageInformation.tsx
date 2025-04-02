import imgHomePage from "../../assets/imgHomePage.jpg";
import "./HomePageInformation..css";

function HomePageInformation() {
  return (
    <div className="containerHomePageInformation">
      <img src={imgHomePage} alt="" className="imgHomePage" />
      <p>
        Avec KeyBord, simplifiez la gestion de vos trousseaux de clefs.
        <br />
        <br />
        Quel agent immobilier ne s’est jamais posé la question de savoir ou il a
        mis les clefs du dernier logement visité ? Lequel des mes collègues n’a
        pas remis les clefs à leur place ? Quel est le dernier entrepreneur à
        être intervenu dans le bien ?
        <br />
        <br />
        Toutes ces questions font parties du quotidien d’un agent immobilier et
        de ses collaborateurs.
        <br />
        <br />
        Gagnez en temps et en efficacité grâce à KeyBord qui sera votre allié
        pour une meilleure gestion des clefs.
      </p>

      <button type="button">CONNAITRE NOS TARIFS</button>
    </div>
  );
}

export default HomePageInformation;
