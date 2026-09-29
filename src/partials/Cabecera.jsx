
// src/partials/Cabecera.jsx
import './Cabecera.css'

export default function Cabecera() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          MiAplicación
        </a>

        {/* Botón para menú responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Opciones izquierda */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/nosotros">
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/servicios">
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                Contacto
              </a>
            </li>

          </ul>

          {/* Login derecha */}
          <a href="/login" className="btn btn-primary">
            Login
          </a>

        </div>
      </div>
    </nav>
  )
}
