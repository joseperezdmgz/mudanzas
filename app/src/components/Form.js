import "./Form.css";
import { AiOutlineMail } from "react-icons/ai";

export default function Form() {
  const sendForm = (e) => {
    e.preventDefault();

    const name = document.getElementById("name_input").value;
    const email = document.getElementById("email_input").value;
    const telephone = document.getElementById("telephone_input").value;
    const subject = document.getElementById("subject_input").value;
    const message = document.getElementById("message_input").value;

    console.log(
      `Nombre: ${name} - Email: ${email} - Teléfono: ${telephone} - Asunto: ${subject} - Mensaje: ${message}`
    );
  };

  return (
    <div className="form-container">
      <a id="linktocontact" href></a>

      <h1>Contacta con nosotros</h1>
      <a href="mailto:call4mefb@gmail.com">
        <AiOutlineMail className="mail-icon" />
      </a>
      <form id="contact_form" onSubmit={sendForm}>
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
