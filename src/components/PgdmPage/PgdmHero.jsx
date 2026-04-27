import React, { useEffect, useRef, useState } from "react";
import "./PgdmHero.css";
import pgdmpgdm from "../../assets/pgdmpgdm.png";
import pgdmmba from "../../assets/pgdmmba.jpg";
import pgdmmca from "../../assets/pgdmmca.png";
import pgdmherobg from "../../assets/pgdmherobg.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";

function PgdmHero() {
  const sectionRef = useRef(null);
  const [isVisualVisible, setIsVisualVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisualVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="pgdm-hero"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${pgdmherobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="pgdm-hero-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <span className="hero-badge">IN Trusted Education Consultancy</span>

            <h1 className="hero-title">
              Get Admission in Top <span>MBA, MCA & PGDM</span> Colleges
            </h1>

            <p className="hero-desc">
              Expert counseling for MBA and MCA admissions with profile-based
              shortlisting, documentation support, and complete admission
              guidance for leading institutes in India and abroad.
            </p>

            <div className="hero-actions">
              <button className="hero-btn">
                Apply Now <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="hero-app-section">
              <p>Counseling On the Go!</p>

              <div className="app-buttons">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=co.diy7.zfkpc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={googleplay} alt="Download on Google Play" />
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/in/app/classplus/id1324522260"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appstore} alt="Download on App Store" />
                </a>
              </div>
            </div>

            <div className="trust-line">
              <i className="bi bi-shield-check"></i>
              Trusted by students and parents for transparent, step-by-step
              admission support.
            </div>
          </div>

          {/* RIGHT SIDE IMAGE GRID */}
          <div
            className={`pgdm-hero-right ${isVisualVisible ? "is-visible" : ""}`}
          >
            <div className="pgdm-hex pgdm-hex-large">
              <img src={pgdmpgdm} alt="Students in classroom" />
            </div>

            <div className="pgdm-hex pgdm-hex-bottom">
              <img src={pgdmmca} alt="Academic success" />
            </div>

            <div className="pgdm-hex pgdm-hex-small">
              <img src={pgdmmba} alt="Medical Studies success" />
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="hero-features">
          <div className="feature-item">
            <i className="bi bi-star-fill"></i>
            Trusted MBA and MCA counseling
          </div>

          <div className="feature-item">
            <i className="bi bi-star-fill"></i>
            Transparent fee and process
          </div>

          <div className="feature-item">
            <i className="bi bi-star-fill"></i>
            Support till final admission
          </div>
        </div>
      </div>
    </section>
  );
}

export default PgdmHero;
