import { useState } from "react";
import Servicios from "../service-items/Servicios";
import Precios from "../service-items/Precios";
import Mas from "../service-items/Mas";

export default function Services() {
  const [displayService, setDisplayService] = useState(Servicios);

  const changeDisplay = (e) => {
    if (e.target.text === "Servicios") {
      setDisplayService(Servicios);
    } else if (e.target.text === "Precios") {
      setDisplayService(Precios);
    } else {
      setDisplayService(Mas);
    }
  };

  return (
    <div className="services-container">
      <h3>¿Qué ofrecemos?</h3>
      <p className="subtitle">Servicios a nivel nacional e internacional</p>
      <div className="service">
        <a href onClick={changeDisplay}>
          Servicios
        </a>
        <a href onClick={changeDisplay}>
          Precios
        </a>
        <a href onClick={changeDisplay}>
          Más sobre nosotros
        </a>
      </div>
      <div className="service-container-text">{displayService}</div>
    </div>
  );
}
