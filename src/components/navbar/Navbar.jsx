
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Navbar.css";
import square from "./square.svg";

export default function Navbar() {
  return (
    <div className="container sticky-top navbar-custom m-4 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-custom navbar-dark">
        <div className="container">
          <a className="navbar-brand brand-text" href="#">
            compleet labs
          </a>
          <button
            className="navbar-toggler mx-4 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon border-0"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--third-color)" }}
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--third-color)" }}
                  href="#"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--third-color)" }}
                  href="#"
                >
                  Case Studies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--third-color)" }}
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hire-us-text" href="#">
                  <img
                    className="mx-1 mb-1"
                    alt="square"
                    src={square}
                    style={{ maxWidth: "20px" }} // Ajustar tamaño de la imagen para que sea responsive
                  ></img>
                  Hire us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

