import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Intro.css";
import backgroundImage from "./backgroundimg.png"; // Importa tu imagen de fondo

const Intro = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="left-col mx-auto  col-md-6  d-flex flex-column justify-content-center align-items-start">
          <div className=" intro-content align-items-start">
            <h1 className="title text-light fw-semibold  start-0">
              We build beautiful and reliable web solutions
            </h1>
            <p
              className="parraf text-light text-left"
              style={{ "--bs-text-opacity": 0.7 }}
            >
              We strongly believe that communication, trust, and transparency
              are the essential elements of a successful business relationship.
              Ready for the journey?
            </p>
          </div>
          <div className=" botones d-flex justify-content-center gap-3 mx-0">
            <a
              href="#lear-more"
              className="btn btn-outline-secondary fw-medium d-flex align-items-center"
            >
              <span className="d-flex align-items-center gap-2">
                Learn more
              </span>
            </a>
            <a
              href="#our-projects"
              className="btn btn-primary fw-medium d-flex align-items-center"
            >
              <span className="d-flex align-items-center gap-2">
                Our Projects{" "}
                <svg
                  width="20px"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="col-md-6 mx-0 p-0">
          <img
            className="  imgbk img-fluid  "
            src={backgroundImage}
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
