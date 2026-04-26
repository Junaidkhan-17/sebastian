import React, { useEffect, useState } from "react";
import "./MbaCoachingHero.css";
import mbacoachinghero from "../../assets/mbacoachinghero.png";

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
    <section className="mba-hero-section"
    style={{
            backgroundImage: `url(${mbacoachinghero})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 70%",
          }}>
           <div className="mba-overlay"></div>

      <div className="container mba-hero-container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="mba-hero-pill">
              <i className="bi bi-stars"></i>
              Top MBA Entrance Coaching
            </span>

            <h1 className="mba-hero-title">
              Crack <span>CAT</span>,<span> XAT</span>, <span>CMAT</span>, <span>MAT</span> & <span>CET</span> with a smarter
              preparation system
            </h1>

            <p className="mba-hero-desc">
              Learn from expert mentors, follow a high-impact prep roadmap, and
              track your progress every week through structured mocks and
              personalized analysis.
            </p>

            <div className="mba-hero-actions">
              <button type="button" className="mba-btn-primary">
                Explore Programs
              </button>
              <button type="button" className="mba-btn-ghost">
                Book Free Counseling
              </button>
            </div>

            <div className="mba-hero-chips">
              <span>
                <i className="bi bi-check2-circle"></i>
                Daily Concept Masterclasses
              </span>
              <span>
                <i className="bi bi-check2-circle"></i>
                Weekly Mock and Analytics
              </span>
              <span>
                <i className="bi bi-check2-circle"></i>
                GD-PI-WAT Mentorship
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
