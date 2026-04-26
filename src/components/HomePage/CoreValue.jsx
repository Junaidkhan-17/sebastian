import React from "react";
import "./CoreValue.css";
import ethics from "../../assets/ethics.png";
import education from "../../assets/education.png";
import excellence from "../../assets/excellence.png";
import sharemarket from "../../assets/sharemarket.png";

const data = [
  {
    title: "Ethics",
    desc: "We follow transparent and ethical admission practices ensuring students receive genuine guidance.",
    img: ethics,
    icon: "bi-shield-check"
  },
  {
    title: "Excellence",
    desc: "We aim for excellence in helping students achieve their academic and career goals.",
    img: excellence,
    icon: "bi-stars"
  },
  {
    title: "Education",
    desc: "We focus on delivering quality education guidance and career mapping for students.",
    img: education,
    icon: "bi-book"
  },
  {
    title: "Share Market",
    desc: "We focus on delivering quality education guidance and career mapping for students.",
    img: sharemarket,
    icon: "bi-graph-up"
  }
];

function CoreValues() {
  return (
    <section className="core-section">
      <div className="container text-center">

        <h2 className="core-title">Core Value</h2>
        <p className="core-subtitle">
          Trusted guidance for students and parents
        </p>

        <div className="divider"></div>

        <div className="row g-4 mt-3">

          {data.map((item, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="core-card">

                <div className="core-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="core-content">
                  <div className="core-icon-box">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CoreValues;
