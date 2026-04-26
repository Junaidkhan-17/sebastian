import React from "react";
import "./MbbsConclusion.css";

function MbbsConclusion() {
  return (
    <section className="mbbs-conclusion-section">
      <div className="container">

        <div className="mbbs-conclusion-card">

          {/* Accent */}
          <div className="mbbs-conclusion-accent"></div>

          <div className="mbbs-conclusion-content">

            {/* Title */}
            <h3 className="mbbs-conclusion-title">
              <i className="bi bi-award-fill"></i>
              Conclusion
            </h3>

            {/* Text */}
            <p>
              Vishwa Medical Admission Point has years of expertise in the area of medical education.
              They have been successful in helping students choose the right college at the right time,
              keeping in mind their merits and distinctions.
            </p>

            <p>
              They have always believed in the core values of ethics, excellence, and education that have
              made them pretty significant and successful. They have successfully recruited students to good
              medical colleges across the globe and have a high success rate.
            </p>

            <p>
              They represent over 785 universities across 20 countries and have been fortunate enough to be
              the number one medical education consultant in Maharashtra.
            </p>

            {/* Divider */}
            <div className="mbbs-conclusion-divider"></div>

            {/* Contact */}
            <div className="mbbs-conclusion-contact">

              <div className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>+91 99704 44580</span>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>info@vmap.co.in</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default MbbsConclusion;