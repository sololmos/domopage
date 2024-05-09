import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Techno.css";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import sass from "./icons/sass.svg";
import js from "./icons/js.svg";
import angular from "./icons/angular.svg";
import python from "./icons/python.svg";

const Techno = () => {
  return (
    <div className="container-fluid bg-primary tech-container mx-auto">
      <div className="container tech mx-auto">
        <div className='row align-items-center'>
          <div className='col-lg-6  text-start'>
            <h2 className="text-light">We use cutting edge technology</h2>
            <p className="text-light sidetext" style={{ '--bs-text-opacity': 0.7 }}>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra
              augue. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
              dolor auctor.
            </p>
          </div>
          <div className='col-lg-6 side-icon'>
            <div className="row row-cols-1 row-cols-lg-2 g-2 justify-content-center mx-auto " style={{ maxWidth: "200px" }}>
              <div className="col py-2  ">
                <img className='icon' src={html} alt='HTML' />
              </div>
              <div className="col py-2">
                <img className='icon' src={css} alt='CSS' />
              </div>
              <div className="col py-2">
                <img className='icon' src={sass} alt='Sass' />
              </div>
              <div className="col py-2">
                <img className='icon' src={js} alt='JavaScript' />
              </div>
              <div className="col py-2">
                <img className='icon' src={angular} alt='Angular' />
              </div>
              <div className="col py-2">
                <img className='icon' src={python} alt='Python' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techno;

