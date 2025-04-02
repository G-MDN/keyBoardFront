import "./HomePageInput.css";

function HomePageInput() {
  return (
    <div className="inputContainer">
      <div>
        <p>email</p>
        <input type="text" placeholder="Entrez votre adresse mail" />
      </div>

      <div>
        <p>mot de passe</p>
        <input type="text" placeholder="Entrez votre mot de passe" />
      </div>
    </div>
  );
}

export default HomePageInput;
