import React, { useEffect, useState } from "react";
import herobg from "../../assets/herobg.jpg";
import "./HeroSection.css";

/* ================= COUNTER COMPONENT ================= */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h3>
      {count}
      {suffix}
    </h3>
  );
}

/* ================= HERO SECTION ================= */
function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>

      <div className="container hero-content">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            WELCOME TO SEBASTIAN INSTITUTE OF EDUCATION
            <span className="underline"></span>
          </h1>

          <p className="hero-subtitle">
            A Trusted Coaching, Career Guidance and Admission Consultancy for
            Engineering, Commerce (MBA, PGDM & MCA) and Medical Programs (MBBS,
            BAMS).
          </p>

          <p className="hero-description">
            Sebastian Educational Institute helps students achieve their dream
            of studying in top colleges across India and abroad with complete
            admission guidance.
          </p>

          {/* STATS */}
          <div className="row stats-row">
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="stat-card">
                <i className="bi bi-people-fill"></i>
                <div>
                  <Counter end={1000} suffix="+" />
                  <p>Students Guided</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <div className="stat-card">
                <i className="bi bi-award-fill"></i>
                <div>
                  <Counter end={10} suffix="+ Years" />
                  <p>Experience</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <div className="stat-card">
                <i className="bi bi-graph-up-arrow"></i>
                <div>
                  <Counter end={95} suffix="%" />
                  <p>Admission Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
