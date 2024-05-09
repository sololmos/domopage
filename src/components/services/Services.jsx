import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import cimg1 from "./card1.svg";
import cimg2 from "./card2.svg";
import cimg3 from "./card3.svg";

const Services = () => {
  const cardsInfo = [
    {
      title: "Business & Product Concept",
      icon: cimg1,
      description:
        "Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.",
    },
    {
      title: "Web & Mobile Development",
      icon: cimg2,
      description:
        "Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
    },
    {
      title: "UX & UI Design",
      icon: cimg3,
      description:
        "Sketch information architecture and simple mock-ups, convert them into clickeable prototypes and finish with usable interface designs to deliver a good and reliable user experience.",
    },
  ];

  return (
    <div>
      <div className="service-container mx-auto container p-20px">
        <div className="services">
          <h2 className="text-light fw-semibold text-center p-20px">
            Our Services
          </h2>
          <p
            className="text-light text-center mb-0"
            style={{ "--bs-text-opacity": 0.7, fontWeight: "600" }}
          >
            We feel very strong about our skills when it comes to planning,
            designing, and coding applications. Here is what we love to do!
          </p>
        </div>
      </div>
      <div
        className="card-section pt-5 bg-none"
        style={{ marginBottom: "-65px" }}
      >
        <div className="container mx-auto d-flex flex-column align-items-center flex-lg-row justify-content-lg-center align-items-lg-stretch gap-5">
          <div className="row justify-content-center ">
            {cardsInfo.map((card, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card text-center h-100">
                  <div className="card-body d-flex flex-column justify-content-center">
                    <img
                      className="bg-primary text-light rounded-circle p-1 mb-3 mx-auto"
                      src={card.icon}
                      alt=""
                      style={{
                        width: "60px",
                        height: "60px",
                        strokeWidth: "1",
                      }}
                    />
                    <h3 className="card-title fs-6 fw-semibold mb-3">
                      {card.title}
                    </h3>
                    <p className="card-text fw-medium">{card.description}</p>
                    <div>
                      <a
                        href="#learn-more"
                        className="btn btn-secondary fw-medium"
                        style={{
                          "--bs-btn-font-size": "12px",
                          "--bs-btn-padding-x": "24px",
                          "--bs-btn-color": "rgba(0, 0, 0, 0.8)",
                          "--bs-btn-bg": "transparent",
                        }}
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

