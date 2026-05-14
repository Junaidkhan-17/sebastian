import React, { useEffect, useState } from "react";
import "./MbaCoachingHero.css";
import mbacoachinghero from "../../assets/mbacoachinghero.png";
import mbaimagenew from "../../assets/mbaimagenew.png";
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
        backgroundImage: `url(${mbaimagenew})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mba-overlay"></div>

      <div className="container mba-hero-container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="mba-hero-title">
            <span>Sebastian Sir </span><br/>
             <h6 className="title-two">MBA COACHING CLASSES.</h6><br/>
             <h6 className="span-one">Learn</h6> , <h6 className="span-one">Practice</h6><h className="and"> &</h> <h6 className="span-one">Execute</h6>
            </h1>

            <p className="mba-hero-desc">
              Beyond MBA coaching, he provides expert guidance for MBBS abroad —
              helping students and parents with eligibility, NMC guidelines,
              university selection, and complete admission processes in Europe.
            </p>
            <h4 className="app-head"> Study Anytime, Anywhere With Our Smart Learning App </h4>
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
                <img className="app-two" src={appstore} alt="Download on App Store" />
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

          
        </div>
      </div>
    </section>
  );
}

export default MbaHero;
