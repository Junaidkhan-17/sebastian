import React, { useEffect, useState } from "react";
import "./MbaCoachingHero.css";
import mbacoachinghero from "../../assets/mbacoachinghero.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return count;
}

function MbaHero() {
  const testsCount = useCountUp(120);
  const questionsCount = useCountUp(45);
  const mentorCount = useCountUp(1);

  return (
    <section
      className="mba-hero-section"
      style={{
        backgroundImage: `url(${mbacoachinghero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 70%",
      }}
    >
      <div className="mba-overlay"></div>

      <div className="container mba-hero-container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="mba-hero-pill">
              <i className="bi bi-stars"></i>
              Sebastian Sir | MBA Coaching Classes
            </span>

            <h1 className="mba-hero-title">
              Study <span>MBA</span> with a smarter Coaching system
            </h1>

            <p className="mba-hero-desc">
              Beyond MBA coaching, he provides expert guidance for MBBS abroad —
              helping students and parents with eligibility, NMC guidelines,
              university selection, and complete admission processes in Europe.
            </p>

            <div className="mba-hero-actions">
              <button type="button" className="mba-btn-primary">
                Explore Programs
              </button>
              <button type="button" className="mba-btn-ghost">
                Book Free Counseling
              </button>
            </div>
            <h4 className="app-head"> Visit to our Classes</h4>
            <a
                href="https://play.google.com/store/apps/details?id=co.diy7.zfkpc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="app" src={googleplay} alt="Download on Google Play" />
              </a>
              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/classplus/id1324522260"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="app" src={appstore} alt="Download on App Store" />
              </a>

            <div className="mba-hero-chips">
              <span>
                <i className="bi bi-check2-circle"></i>
                Expert in Theory Subjects
              </span>
              <span>
                <i className="bi bi-check2-circle"></i>
                Expert in Numerical Subjects
              </span>
              <span>
                <i className="bi bi-check2-circle"></i>
                Exam-Oriented Preparation
              </span>
              <span>
                <i className="bi bi-check2-circle"></i>
                Personal Mentorship
              </span>
              
            </div>
            
          </div>

          <div className="col-lg-5">
            <div className="mba-hero-panel">
              <div className="mba-panel-head">
                <h3>Performance Dashboard</h3>
                <span>Live Preparation Track</span>
              </div>

              <div className="mba-metric-grid">
                <div>
                  <h4>{testsCount}+</h4>
                  <p>Practice Tests</p>
                </div>
                <div>
                  <h4>{questionsCount}k+</h4>
                  <p>Questions Solved</p>
                </div>
                <div>
                  <h4>{mentorCount}:1</h4>
                  <p>Mentor Support</p>
                </div>
              </div>

              <ul className="mba-roadmap">
                <li>
                  <span className="step-dot"></span>
                  Foundation building with quant and verbal drills
                </li>
                <li>
                  <span className="step-dot"></span>
                  Exam-level mocks with sectional strategy reviews
                </li>
                <li>
                  <span className="step-dot"></span>
                  Final sprint with profile and interview readiness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MbaHero;
