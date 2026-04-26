import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "./ProFeaturesRow.css";
import profeaturebg3 from "../../assets/profeaturebg3.png";
import smartshortlisting from "../../assets/smartshortlisting.jpg";
import applicationbuider from "../../assets/applicationbuilder.png";
import admissionsupport from "../../assets/admissionsupport.png";
import scholarshipguidance from "../../assets/scholarshipguidance.png";

function ProFeaturesRow() {
  const features = [
    {
      title: "Smart College Shortlisting",
      desc: "Build and evaluate your shortlist using rank, budget, location and specialization filters.",
      image: smartshortlisting,
    },
    {
      title: "Application Strategy Builder",
      desc: "Plan safe, target and ambitious college mixes for stronger admission outcomes.",
      image: applicationbuider,
    },
    {
      title: "Scholarship & Loan Guidance",
      desc: "Explore merit scholarships and education finance options with expert assistance.",
      image: scholarshipguidance,
    },
    {
      title: "Admission Progress Analytics",
      desc: "Track submissions, offers and deadlines with clear progress insights in one dashboard.",
      image: admissionsupport,
    }
  ];

  return (
    <section className="profeat-section">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="profeat-badge">BEST IN CLASS</span>
          <h2 className="profeat-title">
            Pro Admission Features For Everyone
          </h2>
        </div>

        {/* ✅ HORIZONTAL CARDS */}
        <div className="profeat-row">
          {features.map((item, i) => (
            <div className="profeat-card profeat-card-img" key={i}>

              {/* IMAGE */}
              <div className="profeat-img-wrap">
                  <img src={item.image} alt={item.title} />
                  <span className="profeat-badge-num">{i + 1}</span>
              </div>

              {/* CONTENT */}
              <div className="profeat-body">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProFeaturesRow;