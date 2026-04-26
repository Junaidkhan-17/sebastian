import React from "react";
import "./MbbsFactors.css";

function MbbsFactors() {
  const points = [
    "The total budget of the country and the college compared to your budget.",
    "The process of admission and eligibility criteria.",
    "International relations of the country with India and possible conflicts.",
    "Whether the university is national or government-based.",
    "University approval by MCI/NMC and WHO.",
    "Language of study at the university.",
    "Facilities, infrastructure, faculty and overall environment.",
    "Location and ease of communication.",
    "Hostel availability and quality of life."
  ];

  return (
    <section className="mbbs-factor-section">
      <div className="container">

        <div className="mbbs-factor-card">

          <div className="mbbs-factor-accent"></div>

          <div className="mbbs-factor-content">

            <h3 className="mbbs-factor-title">
              <i className="bi bi-check2-circle"></i>
              Factors for Choosing the Best MBBS College
            </h3>

            <div className="row mt-4">

              {/* LEFT → LIST */}
              <div className="col-lg-7">
                <ul className="mbbs-factor-list">
                  {points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT → INFO BOX */}
              <div className="col-lg-5">
                <div className="mbbs-factor-highlight">
                  <p>
                    The best part about Vishwa Medical Admission Point is that they reduce
                    the stress of choosing the right college. Through expert counselling
                    and evaluation, they help students secure admission in top medical
                    colleges based on their strengths and potential.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MbbsFactors;