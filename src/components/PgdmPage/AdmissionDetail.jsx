import React from "react";
import "./AdmissionDetail.css";
import profilebased from "../../assets/profilebased.png";
import loanscholarship from "../../assets/loanscholarship.png";
import admissionsupport from "../../assets/admissionsupport.png";
import interviewsupport from "../../assets/interviewsupport.png";

function AdmissionGuidance() {
  return (
    <section className="admission-section">
      <div className="container">
        {/* TOP */}
        <div className="top-row d-flex justify-content-between align-items-center flex-wrap">
          <span className="tagline">
            DESIGNED FOR FUTURE MANAGERS AND TECH LEADERS
          </span>

          {/*<span className="badge-pill">
            MBA and MCA 2026 Admissions
          </span>*/}
        </div>

        <h2 className="main-heading">
          MBA and MCA Admission Guidance, Done Right
        </h2>

        <p className="main-desc">
          Structured counseling, trusted mentoring, and practical support to
          help you choose the right institute with confidence.
        </p>

        {/* FEATURES */}
        <div className="featured-cards-row mt-4">
          {[
            {
              title: "Profile-Based College Shortlisting",
              desc: "Get personalized MBA and MCA college options based on academics,budget, entrance scores, and career goals.",
              icon: "bi-check-circle-fill",
              img: profilebased,
            },
            {
              title: "Scholarship and Loan Guidance",
              desc: "Understand available scholarships, fee structures, and education loan options before making your decision.",
              icon: "bi-cash-coin",
              img: loanscholarship,
            },
            {
              title: "End-to-End Admission Support",
              desc: "From application forms to final admission confirmation, we guide you at each step with complete transparency.",
              icon: "bi-shield-check",
              img: admissionsupport,
            },
            {
              title: "Interview and SOP Preparation",
              desc: "Strengthen your profile through expert support for SOP, resume building, and personal interview preparation.",
              icon: "bi-person-badge",
              img: interviewsupport,
            },
          ].map((item, i) => (
            <div className="feature-card" key={i}>
              {/* IMAGE */}
              <div className="feature-img">
                <img src={item.img} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="feature-content">
                <div className="icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-card mt-5">
          <div className="row">
            {/* LEFT */}
            <div className="col-lg-5">
              <span className="small-label">EASY ADMISSION PROCESS</span>

              <h4>Start Your MBA, MCA & PGDM Journey in Minutes</h4>

              <p>
                Connect with our counselors and get a clear roadmap from
                application planning to final seat confirmation.
              </p>

              <button className="cta-btn">Book Free Counseling</button>
            </div>

            {/* RIGHT */}
            <div className="col-lg-7">
              <div className="step-item">
                <i className="bi bi-person-fill"></i>
                <div>
                  <h6>Share Your Academic Profile</h6>
                  <p>
                    Tell us your graduation details, entrance scores, and
                    preferred specialization.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <i className="bi bi-file-earmark-text"></i>
                <div>
                  <h6>Finalize Colleges and Applications</h6>
                  <p>
                    We help you select suitable colleges and complete
                    applications.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <i className="bi bi-award"></i>
                <div>
                  <h6>Secure Admission</h6>
                  <p>Get interview support and final admission assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionGuidance;
