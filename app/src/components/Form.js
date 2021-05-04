import "./Form.css";
import { AiOutlineMail } from "react-icons/ai";

export default function Form() {
  return (
    <div className="form-container">
      <h1>Consulta con nosotros</h1>
      <AiOutlineMail className="mail-icon" />
      <form action="#" method="post" id="contact_form">
        <div className="name">
          <label for="name"></label>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            id="name_input"
            required
          />
        </div>
        <div className="email">
          <label for="email"></label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email_input"
            required
          />
        </div>
        <div className="telephone">
          <label for="name"></label>
          <input
            type="text"
            placeholder="Teléfono"
            name="telephone"
            id="telephone_input"
            required
          />
        </div>
        <div className="subject">
          <label for="subject"></label>
          <select
            placeholder="Asunto"
            name="subject"
            id="subject_input"
            required
          >
            <option disabled hidden selected>
              Asunto
            </option>
            <option>Quiero hacer una mudanza.</option>
            <option>Quiero pedir un presupuesto.</option>
            <option>Quiero saber algo más.</option>
          </select>
        </div>
        <div className="message">
          <label for="message"></label>
          <textarea
            name="message"
            placeholder="Cuéntanos lo que quieras"
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Enviar" id="form_button" />
        </div>
      </form>
    </div>
  );
}
