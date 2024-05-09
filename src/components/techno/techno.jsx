import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Techno.css";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import sass from "./icons/sass.svg";
import js from "./icons/js.svg";
import angular from "./icons/angular.svg";
import python from "./icons/python.svg";
import { motion } from "framer-motion";

const Techno = () => {
  return (
    <div className="container-fluid bg-primary tech-container mx-auto">
      <div className="container tech mx-auto">
        <div className="row align-items-center">
          <div className="col-lg-6  text-start">
            <h2 className="text-light">We use cutting edge technology</h2>
            <p
              className="text-light sidetext"
              style={{ "--bs-text-opacity": 0.7 }}
            >
              Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
              lacinia bibendum nulla sed consectetur. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula
              porta felis euismod semper. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div className="col-lg-6 side-icon">
            <div
              className="row row-cols-1 row-cols-lg-2 g-2 justify-content-center mx-auto "
              style={{ maxWidth: "200px" }}
            >
              <div className="col py-2  ">
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 50 }}
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
                  <img className="icon" src={html} alt="HTML" />
                </motion.div>
              </div>

              <div className="col py-2">
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
                  <img className="icon" src={css} alt="CSS" />
                </motion.div>
              </div>

              <div className="col py-2">
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 5 }}
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
                  <img className="icon" src={sass} alt="Sass" />
                </motion.div>
              </div>

              <div className="col py-2">
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 50 }}
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
                  <img className="icon" src={js} alt="JavaScript" />
                </motion.div>
              </div>

              <div className="col py-2">
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
                  <img className="icon" src={angular} alt="Angular" />
                </motion.div>
              </div>
              <div className="col py-2">
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 5 }}
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
                  <img className="icon" src={python} alt="Python" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techno;
