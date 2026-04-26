import React, { useEffect, useRef, useState } from "react";
import "./EnggFeatures.css";
import engghero1 from "../../assets/engghero1.png";
import engghero2 from "../../assets/engghero2.png";
import engghero3 from "../../assets/engghero3.png";
import engghero4 from "../../assets/engghero4.png";

function EnggFeatures() {
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
      { threshold: 0.3 }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Start smarter",
      desc: "Shortlisted colleges, eligibility mapping and branch-level guidance to help you begin with confidence.",
    },
    {
      title: "Enjoy daily updates",
      desc: "Daily, weekly and monthly admission update cycles so you never miss a counselling or intake window.",
    },
    {
      title: "Guidance 24/7/365",
      desc: "Application support, counselling and deadline alerts across Indian and global engineering universities.",
    },
    {
      title: "Do more with less",
      desc: "Scholarship planning and budget-first counselling to maximize outcomes with manageable investment.",
    },
  ];

  return (
    <section className="engf-section" ref={sectionRef}>
      <div className="container">
        <div className="engf-header text-center">
          <div className="engf-badge">
            DESIGNED TO DELIGHT ENGINEERING ASPIRANTS
          </div>

          <h2 className="engf-title">
            Like Conventional Counselling, But Better
          </h2>

          <p className="engf-subtitle">
            Familiar admission workflow, familiar counselling support but with
            smarter engineering program matching.
          </p>

          <span className="engf-pill">Engineering UG & PG Admissions</span>
        </div>

        <div className="engf-main row g-4 mt-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="row g-4">
              {features.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="engf-card">
                    <div className="engf-icon">
                      <i className="bi bi-check-lg"></i>
                    </div>

                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="engf-visual-wrap">
              <div className={`engf-visual-row ${isVisualVisible ? "is-visible" : ""}`}>
                <img
                  src={engghero4}
                  className="engf-img"
                  alt="Engineering admission guidance"
                />
                <img
                  src={engghero1}
                  className="engf-img center"
                  alt="Engineering Student"
                />
                <img
                  src={engghero2}
                  className="engf-img"
                  alt="Engineering college planning support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnggFeatures;
