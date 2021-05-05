import "./Header.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <a id="linktohome" href></a>
        <img src="logo-completo.png" alt="logo" className="header-img"></img>

        <NavBar></NavBar>
      </div>
    </>
  );
}
