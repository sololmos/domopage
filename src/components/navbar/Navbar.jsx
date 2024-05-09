import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Navbar.css";
import square from "./square.svg"

export default function Navbar() {
  return (
    <div className="container  sticky-top navbar-custom m-4 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-custom navbar-dark">
        <div className="container">
          <a className="navbar-brand brand-text" href="#">compleet labs</a> {/* Aplicar clase brand-text para el color del texto de la marca */}
          <button className="navbar-toggler mx-4 border-0" type="button" data-bs-toggle="collapse" data-bs-theme="dark" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon border-0" ></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a> {/* Aplicar clase nav-link-text para el color del texto del enlace */}
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'var(--third-color)' }} href="#">Services</a> {/* Aplicar clase nav-link-text para el color del texto del enlace */}
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'var(--third-color)' }} href="#">Technology</a> {/* Aplicar clase nav-link-text para el color del texto del enlace */}
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'var(--third-color)' }} href="#">Case Studies</a> {/* Aplicar clase nav-link-text para el color del texto del enlace */}
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'var(--third-color)' }} href="#">About</a> {/* Aplicar clase nav-link-text para el color del texto del enlace */}
              </li>
              <li className="nav-item">
                <a className="nav-link hire-us-text" href="#"><img className="mx-1 mb-1" alt="square" src={square}></img>Hire us</a> {/* Aplicar clase hire-us-text para el color del texto de "Hire us" */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
