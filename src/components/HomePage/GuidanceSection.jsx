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
              <span className="section-text-span">Sebastian Educational Institute</span>  is a highly dedicated and result-oriented educator based in Nagpur, known for expertise in covering the complete RTMNU MBA syllabus. With years of teaching experience and deep understanding of exam patterns, he focuses on building strong conceptual clarity with a strategic, exam-oriented approach.
            </p>

            <p className="section-text">
              Beyond MBA coaching, he provides expert guidance for MBBS abroad — helping students and parents with eligibility, NMC guidelines, university selection, and complete admission processes in Europe.
            </p>

            {/* LIST */}
            <ul className="feature-list">
              <li><i className="bi bi-check-circle-fill"></i> Transparent counseling process</li>
              <li><i className="bi bi-check-circle-fill"></i> Experienced admission mentors</li>
              <li><i className="bi bi-check-circle-fill"></i> End-to-end parent support</li>
              <li><i className="bi bi-check-circle-fill"></i> Expert in Theory Subjects</li>
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
              title: "Expert in Theory Subjects",
              desc: "Strong conceptual teaching style",
              icon: "bi-person-check-fill"
            },
            {
              title: "Expert in Numerical Subjects",
              desc: "Simplifies complex problems",
              icon: "bi-patch-check-fill"
            },
            {
              title: "Exam-Oriented Preparation",
              desc: "Focus on high-scoring strategies",
              icon: "bi-patch-check-fill"
            },
            {
              title: "Personal Mentorship",
              desc: "Helps students master concepts easily",
              icon: "bi-file-earmark-text-fill"
            }
          ].map((item, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="info-card p-4 pt-2">
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
