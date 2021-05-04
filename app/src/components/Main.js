import "./Main.css";
import Services from "./Services";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Main() {
  return (
    <div>
      <a href="https://wa.me/670434292" className="whatsapp" target="_blank">
        <AiOutlineWhatsApp className="whatsapp-logo" />
      </a>
      {/* <h1 className="title">Cuidadosos portes y mudanzas.</h1> */}
      <Services />
    </div>
  );
}
