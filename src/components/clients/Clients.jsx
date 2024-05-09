import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Clients.css";
import c2 from "./c2.svg";
import c3 from "./c3.svg";
import c4 from "./c4.svg";
import c5 from "./c5.svg";
import c1 from "./c1.svg";
import img from "./img.png";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <div className="container-fluid bg-white  clients mx-auto">
      <div className="d-flex flex-column justify-content-center py-5 align-items-center">
        <div className="client-title py-5 text-center">
          <h3 className="fs-6 fw-semibold">CLIENTS WE WORKED WITH</h3>
        </div>
        <div className="clients-brand row d-flex flex-lg-row flex-md-column justify-content-center align-items-center">
          <img className="clients-brand-icon" alt="c" src={c1}></img>
          <img className="clients-brand-icon" alt="c" src={c2}></img>
          <img className="clients-brand-icon" alt="c" src={c3}></img>
          <img className="clients-brand-icon" alt="c" src={c4}></img>
          <img className="clients-brand-icon" alt="c" src={c5}></img>
        </div>

        <div className="row client-card">
          <div className="col-sm-6 mb-3 mb-sm-0 border-opacity-10">
            <motion.div
              initial={{ opacity: 0, x: -30, y: -50 }}
              whileInView={{ opacity: 1, x: 5, y: 2 }}
              transition={{
                default: {
                  type: "spring",
                  damping: 10,
                  duration: 2,
                  stiffness: 40,
                  ease: [0.5, 0.71, 0.2, 1.5],
                },
              }}
            >
              <div className="card text-start bg-primary position-relative ">
                <div className="card-body">
                  <h5 className="card-title text-start text-white fs-4 fw-semibold">
                    Get in touch with us
                  </h5>
                  <p
                    className="card-text text-start text-white fs-6 w-50 py-2"
                    style={{ opacity: 0.7 }}
                  >
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna.
                  </p>
                  <a
                    href="#"
                    className="btn text-white border-white btn-outline-secondary start-0"
                  >
                    Hire us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-sm-6 ">
            <motion.div
              initial={{ opacity: 0, x: 30, y: 50 }}
              whileInView={{ opacity: 1, x: 5, y: 2 }}
              transition={{
                default: {
                  type: "spring",
                  damping: 10,
                  duration: 2,
                  stiffness: 40,
                  ease: [0.5, 0.71, 0.2, 1.5],
                },
              }}
            >
              <div className="card border-opacity-10 text-start bg-primary position-relative">
                <div className="card-body text-white">
                  <h5 className="card-title text-white text-start fs-4 fw-semibold">
                    Our Projects
                  </h5>
                  <p
                    className="card-text  text-white fs-6 w-50 py-2"
                    style={{ opacity: 0.7 }}
                  >
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna.
                  </p>
                  <a
                    href="#"
                    className="btn text-white border-white btn-outline-secondary start-0 "
                  >
                    See Projects
                  </a>
                  <img
                    src={img}
                    alt="img"
                    className="position-absolute bottom-0 end-0"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
