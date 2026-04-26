import React from "react";
import "./MbbsAdvantages.css";

function MbbsAdvantages() {
  const advantages = [
    "In India, only 5% of applicants secure medical seats.",
    "Private colleges have high fees, making abroad options more affordable.",
    "No separate entrance exams; many colleges accept NEET scores.",
    "Living costs are cheaper in many countries.",
    "Students become more independent and confident.",
    "Scholarships help reduce financial burden."
  ];

  return (
    <section className="mbbs-adv-section">
      <div className="container">

        <div className="mbbs-adv-card">

          <div className="mbbs-adv-accent"></div>

          <div className="mbbs-adv-content">

            <h3 className="mbbs-adv-title">
              <i className="bi bi-globe-americas"></i>
              Advantages of Studying MBBS Abroad
            </h3>

            <div className="row mt-4">

              {advantages.map((item, i) => (
                <div className="col-md-6 mb-3" key={i}>
                  <div className="mbbs-adv-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <p>{item}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MbbsAdvantages;