import logo from "../../../logoPage.svg";
import "../header/style.css";

export function Header({ sethome }) {
  return (
    <header id="headerMain">
      <div className="container1">
        {" "}
        <img src={logo} alt="Nu kenzie" />
        <button onClick={() => sethome(true)}>Início</button>
      </div>
    </header>
  );
}
