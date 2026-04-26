import React from "react";
import "./MbaFeaturesSection.css";

function MbaFeaturesSection() {
  return (
    <section className="mba-features">
      <div className="container text-center">

        <span className="section-tag">WHY OUR MBA COACHING</span>

        <h2 className="section-title">
          Structured Learning + Smart Practice + Interview Readiness
        </h2>

        {/* TOP CARDS */}
        <div className="row mt-5 g-4">

          {[
            {
              title: "Complete Syllabus Coverage",
              desc: "Quant, LRDI, Verbal and General Awareness mapped with a proven study plan.",
              icon: "bi-book"
            },
            {
              title: "Performance Dashboard",
              desc: "Track score, percentile trends, weak topics and test accuracy with mentor feedback.",
              icon: "bi-graph-up"
            },
            {
              title: "Mentor-Led Batches",
              desc: "Small batches for focused attention, doubt resolution and accountable preparation.",
              icon: "bi-people"
            }
          ].map((item, i) => (
            <div className="col-lg-4" key={i}>
              <div className="feature-card">

                <div className="mba-feature-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h5>{item.title}</h5>
                <p>{item.desc}</p>

              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM SECTION */}
        <div className="row mt-5 g-4">

          {/* LEFT */}
          <div className="col-lg-6">
            <div className="info-card">

              <h4>Core Preparation Modules</h4>

              <ul>
                <li>Quantitative Aptitude masterclasses with shortcut techniques</li>
                <li>Verbal Ability and Reading Comprehension strategy sessions</li>
                <li>Logical Reasoning and Data Interpretation sectional labs</li>
                <li>Previous year paper solving and percentile improvement plan</li>
              </ul>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="info-card">

              <h4>Premium Coaching Add-ons</h4>

              <ul>
                <li>Daily practice sheets and homework review</li>
                <li>Weekly full-length mocks with mentor debrief</li>
                <li>OMET-specific sessions for XAT, NMAT, SNAP and CET</li>
                <li>Profile building, SOP and B-school application guidance</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MbaFeaturesSection;
