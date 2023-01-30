import "../Homepage/homePage.css";
import "../../../assets/Nu Kenzie.svg";
import logo from "../../Nu Kenzie.svg";
import ilustration from "../../homePageIlustration.svg";
function HomePage({ sethome }) {
  return (
    <header className="headerHome">
      <div className="center">
        <div className="leftHome">
          <img src={logo} alt="Logo" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <button
            className="buttonDefault1 homeButton"
            onClick={() => sethome(false)}
          >
            Iniciar
          </button>
        </div>
        <div className="rightHome">
          <img src={ilustration} alt="Ilustration" />
        </div>
      </div>
    </header>
  );
}
export { HomePage };
