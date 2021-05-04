import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item active">
            <a className="navbar-link" href="#">
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Servicios
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Principal
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
