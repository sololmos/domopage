import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import f1 from "./f1.svg";
import f2 from "./f2.svg";
import f3 from "./f3.svg";
import f4 from "./f4.svg";

function Footer() {
  return (
    <div className="container footer-cont mx-auto">
      <div className="row my-5">

        <div className="col-lg-6">
          <h4 className="title-footer text-white text-start my-1 fw-semibold py-2">
            compleet labs
          </h4>
          <p className="text-light text-start text-footer">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
            nulla.
          </p>
          <div className="d-flex flex-row">
            <img className="f-icon" alt="c" src={f1} />
            <img className="f-icon" alt="c" src={f2} />
            <img className="f-icon" alt="c" src={f3} />
            <img className="f-icon" alt="c" src={f4} />
          </div>
        </div>


        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-4 text-start">
              <h5 className="text-white title-footer my-3 fw-semibold">
                SITEMAP
              </h5>
              <p className="text-light text-start text-footer points">Home</p>
              <p className="text-light text-start text-footer points">
                Technology
              </p>
              <p className="text-light text-start text-footer points">
                Services
              </p>
              <p className="text-light text-start text-footer points">About</p>
            </div>

            <div className="col-md-4 text-start">
              <h5 className="text-white title-footer my-3 fw-semibold">
                CASE STUDIES
              </h5>
              <p className="text-light text-start text-footer points">
                Swiss Airlines
              </p>
              <p className="text-light text-start text-footer points">Google</p>
              <p className="text-light text-start text-footer points">Apple</p>
              <p className="text-light text-start text-footer points">Nike</p>
            </div>

            <div className="col-md-4 text-start">
              <h5 className="text-white title-footer my-3 fw-semibold">
                CONTACT
              </h5>
              <p className="text-light text-start text-footer points">Jobs</p>
              <p className="text-light text-start text-footer points">
                Hire us
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" contact text-light text-start my-2 py-3">
        Developed by
        <a
          className="link-contacto text-white fw-semibold mx-2"
          target="_blank"
          rel="noopener"
          href="https://portfolio-sol-olmos.vercel.app/"
        >
          Sol Olmos
        </a>
      </div>
    </div>
  );
}

export default Footer;
