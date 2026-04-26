import React from "react";
import "./CareerCounselling.css";

function CareerCounselling() {
  return (
    <section className="career-section">
      <div className="container">

        <div className="career-card">

          <div className="career-accent"></div>

          <div className="career-content">

            <h4 className="career-title">
              <i className="bi bi-person-check-fill"></i> Career Counselling
            </h4>

            <ul className="career-list">
              <li>
                Vishwa Medical Admission Point aims at solving problems for a student when it becomes quite overwhelming for them to choose a college which may be up to their choice and distinction.
              </li>

              <li>
                With experienced counselors, they resolve queries and guide students in choosing the right career, country, and college with the best facilities.
              </li>

              <li>
                They provide structured guidance, helping students identify the most suitable career path and choose the best college accordingly.
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CareerCounselling;