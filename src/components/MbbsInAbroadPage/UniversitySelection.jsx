import React from "react";
import "./UniversitySelection.css";

function UniversitySelection() {
  return (
    <section className="uni-section">
      <div className="container">

        <div className="uni-card">

          <div className="uni-accent"></div>

          <div className="uni-content">

            <h4 className="uni-title">
              <i className="bi bi-building-check"></i> University Selection
            </h4>

            <p>
              In many cases, even though the career has been decided, students usually fail to find a college that matches up to their caliber. Vishwa Medical Admission Point helps in giving students multiple options of universities where they can study MBBS in India or abroad.
            </p>

            <p>
              Out of the hundreds of universities worldwide, only the top ones that match the caliber and merit of the students are selected.
            </p>

            <h6 className="uni-sub">We also assist in:</h6>

            <ul className="uni-list">
              <li>Admission Assistance</li>
              <li>Finance Assistance</li>
              <li>Visa Assistance</li>
              <li>Forex Assistance</li>
              <li>Pre Departure Assistance</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default UniversitySelection;