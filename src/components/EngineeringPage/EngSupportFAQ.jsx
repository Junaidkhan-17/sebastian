import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import "./EngSupportFAQ.css";

const faqs = [
  {
    q: "Is this engineering admission guidance legal?",
    a: "Yes. We follow Indian admission compliance guidelines and provide transparent counselling support for eligible students.",
  },
  {
    q: "Do I need an entrance score to apply?",
    a: "Many colleges accept entrance scores, but we also guide profile-based admissions depending on eligibility.",
  },
  {
    q: "Can I apply to international engineering colleges?",
    a: "Yes, we assist with global admissions including documentation, university selection and applications.",
  },
  {
    q: "How early should I begin engineering admission planning?",
    a: "Ideally, start 6 to 8 months before target deadlines so you can manage exams, shortlisting, documentation, and interviews confidently.",
  },
];

function EngSupportFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="engsup-section">
      <div className="container">
        <div className="engsup-head text-center">
          <span className="engsup-label">Student Help Desk</span>
          <h2>Engineering Admission FAQ and Priority Support</h2>
          <p>
            Everything you need to know about engineering admissions, in one
            place.
          </p>
        </div>

        <div className="row g-4 align-items-stretch mt-2">
          <div className="col-lg-4">
            <aside className="engsup-card">
              <span className="engsup-chip">Need quick guidance?</span>
              <h3>Engineering Admission Support</h3>

              <p className="engsup-copy">
                Connect with counselors for personalized college shortlisting,
                documentation support, and admission planning.
              </p>

              <ul className="engsup-points">
                <li>
                  <i className="bi bi-check2-circle"></i>
                  Profile-based college mapping
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>
                  Entrance and interview preparation
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>
                  End-to-end application guidance
                </li>
              </ul>

              <div className="engsup-actions">
                <a href="#">Explore Support Center</a>
                <a href="#">Raise Admission Query</a>
              </div>
            </aside>
          </div>

          <div className="col-lg-8">
            <div className="engsup-panel">
              {faqs.map((item, i) => (
                <article
                  className={`engsup-faq-card ${active === i ? "active" : ""}`}
                  key={item.q}
                >
                  <button
                    type="button"
                    className="engsup-faq-header"
                    onClick={() => setActive(active === i ? -1 : i)}
                    aria-expanded={active === i}
                  >
                    <h6>{item.q}</h6>
                    <i
                      className={`bi ${active === i ? "bi-dash-lg" : "bi-plus-lg"}`}
                    ></i>
                  </button>
                  <div
                    className={`engsup-faq-body ${active === i ? "active" : ""}`}
                  >
                    <p>{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngSupportFAQ;
