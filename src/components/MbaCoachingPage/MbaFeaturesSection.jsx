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
                <li>Complete RTMNU MBA syllabus coverage (All Subjects)</li>
                <li>Strong focus on Numerical + Theory preparation</li>
                <li>Free Important Questions provided at joining</li>
                <li>Exam-oriented teaching methodology</li>
              </ul>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="info-card">

              <h4>Premium Coaching Add-ons</h4>

              <ul>
                <li>Regular numerical practice sets for all subjects</li>
                <li>Well-structured and easy-to-understand theory notes</li>
                <li>Live classes available (Online + Offline in Nagpur)</li>
                <li>Personal 24×7 doubt-solving support</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MbaFeaturesSection;
