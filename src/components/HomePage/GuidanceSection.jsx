import React from "react";
import "./GuidanceSection.css";
import guidencebg from "../../assets/guidencebg.png";
import guidancebg4 from "../../assets/guidancebg4.png";
import guidancebg5 from "../../assets/guidancebg5.png";
import homeguidance2 from "../../assets/homeguidance2.png";

function GuidanceSection() {
  return (
    <section className="guidance-section"
    style={{
            backgroundImage: `url(${guidancebg5})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
      <div className="container">

        <div className="row align-items-center gy-5">

          {/* LEFT IMAGE */}
          <div className="col-lg-5">
            <div className="image-wrapper">
              <img src={homeguidance2} alt="students" />

              <div className="floating-badge">
                <i className="bi bi-mortarboard-fill"></i>
                <div>
                  <h6>1000+ Students</h6>
                  <p>Placed in dream colleges</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">

            <span className="section-badge">YOUR ADMISSION PARTNER</span>

            <h2 className="section-title">
              Shaping Student Futures With Expert Guidance
            </h2>

            <p className="section-text">
              <span className="section-text-span">Sebastian Educational Institute</span> is one of the trusted education consultancy services helping students secure admission in leading colleges across India and abroad.
            </p>

            <p className="section-text">
              From course and college selection to final confirmation, our team supports every step with clarity, speed, and transparency.
            </p>

            {/* LIST */}
            <ul className="feature-list">
              <li><i className="bi bi-check-circle-fill"></i> Transparent counseling process</li>
              <li><i className="bi bi-check-circle-fill"></i> Experienced admission mentors</li>
              <li><i className="bi bi-check-circle-fill"></i> End-to-end parent support</li>
            </ul>

            {/* BUTTONS */}
            <div className="btn-group-custom">
              <button className="btn-primary-custom">
                Explore Services <i className="bi bi-arrow-right"></i>
              </button>
              <button className="btn-outline-custom">
                Talk to Counselor <i className="bi bi-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="row mt-5 g-4">

          {[
            {
              title: "Personalized Counseling",
              desc: "One-to-one career planning based on goals, marks, and budget.",
              icon: "bi-person-check-fill"
            },
            {
              title: "Verified Colleges",
              desc: "Guidance for top institutions in India and selected global destinations.",
              icon: "bi-patch-check-fill"
            },
            {
              title: "Admission Support",
              desc: "Complete help with applications, documentation, and follow-ups.",
              icon: "bi-file-earmark-text-fill"
            }
          ].map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="info-card">
                <i className={`bi ${item.icon}`}></i>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GuidanceSection;
