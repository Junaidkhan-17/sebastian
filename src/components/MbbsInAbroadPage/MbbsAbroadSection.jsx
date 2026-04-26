import React from "react";
import "./MbbsAbroadSection.css";

function MbbsAbroadSection() {
  return (
    <section className="mbbs-section">
      <div className="container">

        <h2 className="mbbs-main-title text-center">
          MBBS In Abroad
        </h2>

        <div className="mbbs-card">

          <div className="mbbs-accent"></div>

          <div className="mbbs-content">

            <h4 className="mbbs-subtitle">Study MBBS in Abroad</h4>

            <p>
              The admission process in the field of MBBS in India has undergone various changes and reforms in the past couple of years. Considering the participation it receives and the competition, which is very vast and diverse, obtaining a degree in Bachelor of Medicine, Bachelor of Surgery (MBBS) is not the easiest task.
            </p>

            <p>
              In such dire straits, it becomes important to have a mentor, a consultant, or an advisor who can guide students and help them get the best outcome for themselves.
            </p>

            <h6 className="mbbs-mini-heading">Admission Process:</h6>

            <ul className="mbbs-list">
              <li>Single national level exam conducted across India known as NEET.</li>
              <li>Conducted by National Testing Agency (NTA).</li>
              <li>No separate state or university level exams.</li>
              <li>Admissions based purely on NEET score.</li>
              <li>Students fill college preferences during application.</li>
              <li>Colleges allotted based on rank and choice.</li>
              <li>Applicable for both India and abroad MBBS.</li>
            </ul>

            <p>
              Due to high competition, many students prefer studying MBBS abroad as it is cost-effective and has fewer entry barriers.
            </p>

            <p>
              Expert consultancies guide students through documentation, application, and college selection ensuring better outcomes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MbbsAbroadSection;