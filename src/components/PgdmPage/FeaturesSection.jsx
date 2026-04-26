import React from "react";
import "./FeaturesSection.css";
import featurebg from "../../assets/featurebg.png";

const features = [
  {
    title: "Career Path Mapping",
    desc: "Understand the right MBA or MCA specialization based on your strengths and long-term career targets.",
    icon: "bi-diagram-3"
  },
  {
    title: "Placement-Focused College Insights",
    desc: "Compare colleges by placement records, industry exposure, and curriculum quality before you apply.",
    icon: "bi-briefcase"
  },
  {
    title: "Application and SOP Review",
    desc: "Improve application quality with expert review of SOPs, resumes, and recommendation documents.",
    icon: "bi-file-earmark-text"
  },
  {
    title: "Parent and Student Counseling",
    desc: "Clear guidance for families on budget planning, timelines, and admission decisions with full transparency.",
    icon: "bi-people"
  }
];

function FeaturesSection() {
  return (
    <section className="features-section"
    style={{
                backgroundImage: `url(${featurebg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center -460px",
              }}>
      <div className="container">

        <span className="section-label">BEST IN CLASS</span>

        <h2 className="section-title">
          Professional Counseling Features for MBA, MCA & PGDM Admissions
        </h2>

        <div className="row g-4 mt-4">

          {features.map((item, i) => (
            <div className="col-lg-6" key={i}>
              <div className="feature-card-premium">

                <div className="icon-wrap">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <div className="content">
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

export default FeaturesSection;
