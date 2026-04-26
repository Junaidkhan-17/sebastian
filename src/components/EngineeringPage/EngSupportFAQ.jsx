import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import "./EngSupportFAQ.css";

function EngSupportFAQ() {
  const faqs = [
    {
      q: "Is this engineering admission guidance legal?",
      a: "Yes. We follow Indian admission compliance guidelines and provide transparent counselling support for eligible students."
    },
    {
      q: "Do I need an entrance score to apply?",
      a: "Many colleges accept entrance scores, but we also guide profile-based admissions depending on eligibility."
    },
    {
      q: "Can I apply to international engineering colleges?",
      a: "Yes, we assist with global admissions including documentation, university selection and applications."
    }
  ];

  return (
    <section className="engsup-section">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* LEFT SUPPORT CARD */}
          <div className="col-lg-4">
            <div className="engsup-card">
              <h2 className="engsup-heading">
                24x7 <br /> Customer Support
              </h2>

              <p className="engsup-small">Have a question?</p>
              <p className="engsup-link">
                Go to <span>Support Centre</span> to do a quick search
              </p>

              <p className="engsup-small mt-3">Need more help?</p>
              <p className="engsup-link">
                Raise a <span>support ticket</span><br />
                We are here to help
              </p>

              <div className="engsup-social mt-4">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div className="col-lg-8">
            <h3 className="engsup-title">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="engsupAccordion">
              {faqs.map((item, i) => (
                <div className="accordion-item engsup-accordion" key={i}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#engsup${i}`}
                    >
                      {item.q}
                    </button>
                  </h2>

                  <div
                    id={`engsup${i}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#engsupAccordion"
                  >
                    <div className="accordion-body">
                      {item.a}
                    </div>
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

export default EngSupportFAQ;