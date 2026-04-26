import React from "react";
import "./SignupSection.css";

function SignupSection() {
  return (
    <section className="signup-section">
      <div className="container">
        <div className="signup-card">

          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-5">
              <div className="signup-left">
                <span className="signup-badge">EASY SIGN UP</span>

                <h2 className="signup-title">
                  Start Your Engineering Journey In Minutes
                </h2>

                <p className="signup-text">
                  Begin your engineering admission process with guided counselling,
                  branch selection and complete documentation help.
                </p>

                <button className="signup-btn">
                  Sign Up <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7">
              <div className="signup-right">

                {[
                  {
                    title: "Complete Profile Verification",
                    desc: "Keep your Aadhaar, marksheets and entrance score details ready. Verification takes < 1 min.",
                    icon: "bi-person-check-fill"
                  },
                  {
                    title: "Select Colleges and Pay Application Fees",
                    desc: "Conveniently shortlist branches, compare tuition and submit applications with guided documentation.",
                    icon: "bi-bank2"
                  },
                  {
                    title: "Start Your Engineering Admission Journey",
                    desc: "Track applications, counselling rounds and confirmations for B.Tech, M.Tech and global engineering programs.",
                    icon: "bi-graph-up-arrow"
                  }
                ].map((item, i) => (
                  <div className="feature-box" key={i}>
                    <div className="feature-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div>
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default SignupSection;