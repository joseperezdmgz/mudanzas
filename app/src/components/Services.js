import { useState } from "react";
import Servicios from "./service-items/Servicios";
import Precios from "./service-items/Precios";
import SobreNosotros from "./service-items/SobreNosotros";
import "./css/Services.css";

export default function Services() {
  const [displayService, setDisplayService] = useState(Servicios);

  const changeDisplay = (e) => {
    if (e.target.innerHTML === "Servicios") {
      setDisplayService(Servicios);
    } else if (e.target.innerHTML === "Precios") {
      setDisplayService(Precios);
    } else {
      setDisplayService(SobreNosotros);
    }
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Nuestros Servicios</h1>
      <div className="services">
        <button onClick={changeDisplay}>Servicios</button>
        <button onClick={changeDisplay}>Precios</button>
        <button onClick={changeDisplay}>Sobre Nosotros</button>
      </div>
      {displayService}
    </div>
  );
}
