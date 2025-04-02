import { Link } from "react-router-dom";
import "./HomePageButtonConnection.css";

function HomePageButtonConnection() {
  return (
    <div className="containerButtonConnection">
      <div>
        <Link to="/tableau">
          <button type="button" className="buttonConnection">
            CONNEXION
          </button>
        </Link>
      </div>
      <div>
        <p>Mot de passe oublié</p>
      </div>
    </div>
  );
}

export default HomePageButtonConnection;
