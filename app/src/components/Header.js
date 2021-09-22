/* eslint-disable jsx-a11y/anchor-has-content */
import "./css/Header.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <a id="linktohome" href></a>
      <div className="header-container">
        <img src="logo-completo.png" alt="logo" className="header-img"></img>
        <Navigation></Navigation>
      </div>
    </>
  );
}
