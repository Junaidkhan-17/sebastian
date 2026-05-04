import { useState } from "react";
import "./MbaSyllabus.css";
import { BookOpenCheckIcon } from "@animateicons/react/lucide";

const semester1 = [
  "Principles of Business Management",
  "Foundation course in Marketing Management",
  "Foundation course in Human Resource Management",
  "Foundation course in Information Technology Management",
  "Foundation course in Accounting",
  "Quantitative Decision Making",
  "Business Legislation",
  "Financial Management",
];

const semester2 = [
  "Organisation Behavior & Development",
  "Managerial Economics",
  "Environment Management",
  "Business Research",
  "Specialization A: Paper I",
  "Specialization A: Paper II",
  "Specialization B: Paper I",
  "Specialization B: Paper II",
];

const semester3 = [
  "Applied Operations Research",
  "Entrepreneurial Development",
  "Strategic Management",
  "Business Ethics & Corporate Governance",
  "Public System Management",
  "Project Management and Quality Management",
  "Specialization A: Paper III",
  "Specialization B: Paper III",
];

const semester4 = [
  "Specialization A: Paper IV",
  "Specialization A: Paper V",
  "Specialization A: Paper VI",
  "Specialization B: Paper IV",
  "Specialization B: Paper V",
  "Specialization B: Paper VI",
  "Project Report (from any one Specialisation subject)",
];

const MbaSyllabus = () => {
  const [activeTab, setActiveTab] = useState("semesters");

  return (
    <section className="mba-section">
      <div className="container text-center">
        <h2 className="title">
          RTMNU <span>MBA Syllabus</span> Coaching
        </h2>

        <p className="subtitle">
          Comprehensive coverage of all semesters and specializations – Numerical + Theory coaching for every subject.
        </p>

        {/* TABS */}
        <div className="tabs">
          <div
            className={`tab ${activeTab === "semesters" ? "active" : ""}`}
            onClick={() => setActiveTab("semesters")}
          ><BookOpenCheckIcon size={24} color="#f45b48" />
           Semesters
          </div>
          {/* Animated indicator */}
          <div
            className={`tab-indicator ${
              activeTab === "semesters" ? "left" : "right"
            }`}
          ></div>
        </div>

        {/* CONTENT */}
        <div className="tab-content">
          {activeTab === "semesters" && (
            <div className="row content-animate">

              <div className="col-md-6 mb-4">
                <div className="semester-card">
                  <div className="semester-header">
                    <h5>Semester </h5>
                    <span className="badge">1</span>

                  </div>

                  <ul>
                    {semester1.map((item, i) => (
                      <li key={i}>
                        <span>{String(i + 1).padStart(2, "0")}</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="semester-card">
                  <div className="semester-header">
                    <h5>Semester </h5>
                    <span className="badge">2</span>

                  </div>

                  <ul>
                    {semester2.map((item, i) => (
                      <li key={i}>
                        <span>{String(i + 1).padStart(2, "0")}</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="semester-card">
                  <div className="semester-header">
                    <h5>Semester</h5>
                    <span className="badge">3</span>

                  </div>

                  <ul>
                    {semester3.map((item, i) => (
                      <li key={i}>
                        <span>{String(i + 1).padStart(2, "0")}</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="semester-card">
                  <div className="semester-header">
                    <h5>Semester</h5>
                    <span className="badge">4</span>

                  </div>

                  <ul>
                    {semester4.map((item, i) => (
                      <li key={i}>
                        <span>{String(i + 1).padStart(2, "0")}</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {activeTab === "specializations" && (
            <div className="content-animate">
              <p className="spec-text">
                Specializations content can go here (Finance, Marketing, HR, etc.)
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default MbaSyllabus;