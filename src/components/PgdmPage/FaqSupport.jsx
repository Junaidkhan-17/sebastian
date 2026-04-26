import React, { useState } from "react";
import "./FaqSupport.css";

const faqs = [
  {
    q: "Which entrance exams are accepted for MBA and MCA admissions?",
    a: "Most colleges accept scores from CAT, MAT, XAT, and CMAT for MBA, and NIMCET or state-level tests for MCA. Our counselors help you align your score with the right college shortlist.",
  },
  {
    q: "Can I get admission support if my academic score is average?",
    a: "Yes. We build a profile-first strategy with realistic college options, better application positioning, and process guidance to improve your overall admission chances.",
  },
  {
    q: "Do you assist with documentation and interview preparation?",
    a: "Absolutely. We support SOP and resume drafting, form-checking, and mock interview preparation so you can apply confidently.",
  },
  {
    q: "How early should I start the admission process?",
    a: "Ideally, start 6 to 8 months before intake deadlines. Early planning gives you enough time for exams, shortlisting, documentation, and interview preparation.",
  },
];

function FaqSupport() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-head text-center">
          <span className="faq-label">Student Help Desk</span>
          <h2>Admission FAQ and Priority Support</h2>
          <p>
            Everything you need to know about MBA, MCA, and PGDM admissions,
            in one place.
          </p>
        </div>

        <div className="row g-4 align-items-stretch mt-2">
          <div className="col-lg-4">
            <aside className="support-card">
              <span className="support-chip">Need quick guidance?</span>
              <h3>MBA, MCA and PGDM Admission Support</h3>

              <p className="support-copy">
                Connect with counselors for personalized college shortlisting,
                documentation support, and admission planning.
              </p>

              <ul className="support-points">
                <li>
                  <i className="bi bi-check2-circle"></i>
                  Profile-based college mapping
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>
                  SOP and interview preparation
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>
                  End-to-end application guidance
                </li>
              </ul>

              <div className="support-actions">
                <a href="#">Explore Support Center</a>
                <a href="#">Raise Admission Query</a>
              </div>

              
            </aside>
          </div>

          <div className="col-lg-8">
            <div className="faq-panel">
              {faqs.map((item, i) => (
                <article
                  className={`faq-card ${active === i ? "active" : ""}`}
                  key={item.q}
                >
                  <button
                    type="button"
                    className="faq-header"
                    onClick={() => setActive(active === i ? -1 : i)}
                    aria-expanded={active === i}
                  >
                    <h6>{item.q}</h6>
                    <i
                      className={`bi ${
                        active === i ? "bi-dash-lg" : "bi-plus-lg"
                      }`}
                    ></i>
                  </button>

                  <div className="faq-body">
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

export default FaqSupport;
