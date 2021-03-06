import "./Header.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <a id="linktohome" href></a>
      <div className="header-container">
        <img src="logo-completo.png" alt="logo" className="header-img"></img>
        <NavBar></NavBar>
      </div>
    </>
  );
}
