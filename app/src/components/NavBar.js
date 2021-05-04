import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./NavBar.css";

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a to="#" className="menu-bars">
          <GiHamburgerMenu className="open-icon" onClick={showSidebar} />
        </a>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <a to="#" className="menu-bars">
              <AiOutlineClose className="close-icon" onClick={showSidebar} />
            </a>
          </li>

          <li className="nav-text">
            <a className="nav-text" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-text">
            <a href="#">Servicios</a>
          </li>
          <li className="nav-text">
            <a href="#">Principal</a>
          </li>
          <li className="nav-text">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
