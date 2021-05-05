import "./Main.css";
import Services from "./Services";
import { AiOutlineWhatsApp } from "react-icons/ai";
import ImageZoom from "react-medium-image-zoom";

export default function Main() {
  return (
    <div id="#main">
      <a href="https://wa.me/88888888" className="whatsapp" target="_blank">
        <AiOutlineWhatsApp className="whatsapp-logo" />
      </a>
      <a id="linktomain" href></a>
      <div id="media-gallery">
        <ImageZoom
          image={{
            src: "carretera.png",
            alt: "carretera",
            className: "img",
          }}
          zoomImage={{
            src: "carretera-big.png",
            alt: "carretera",
          }}
          className="image-zoom-item"
        />
        <ImageZoom
          image={{
            src: "frente.png",
            alt: "frente",
            className: "img",
          }}
          zoomImage={{
            src: "frente.png",
            alt: "frente",
          }}
        />
        <ImageZoom
          image={{
            src: "playa.png",
            alt: "playa",
            className: "img",
          }}
          zoomImage={{
            src: "playa-big.png",
            alt: "playa",
          }}
        />
        <ImageZoom
          image={{
            src: "interior.png",
            alt: "interior",
            className: "img",
          }}
          zoomImage={{
            src: "interior-big.png",
            alt: "interior",
          }}
        />
      </div>
      <a id="linktoservices" href></a>
      <Services />
    </div>
  );
}
