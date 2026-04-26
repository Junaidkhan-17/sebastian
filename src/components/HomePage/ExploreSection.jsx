import React, { useEffect, useRef, useState } from "react";
import "./ExploreSection.css";
import explorebg from "../../assets/explorebg.png";
import explorebg3 from "../../assets/explorebg3.png";
import explorebg4 from "../../assets/explorebg4.png";
import explorebg5 from "../../assets/explorebg5.png";
import nightbg from "../../assets/nightbg.jpg";
import mbbs from "../../assets/mbbs.jpg";
import engineering from "../../assets/engineering.png";
import mba from "../../assets/mba.jpg";
import coding2 from "../../assets/coding2.jpg";
import buildingbg2 from "../../assets/buildingbg2.png";
import herobg from "../../assets/herobg.jpg";

function ExploreSection() {
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

  return (
    <section className="explore-section" ref={sectionRef}>
      <div
        className="explore-bg"
        style={{ backgroundImage: `url(${explorebg5})` }}
      ></div>
      <div className="container">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <span className="badge custom-badge">
            <i className="bi bi-mortarboard-fill"></i> Sebastian Institute of
            Education
          </span>
          <span className="hashtag">#GlobalEducation</span>
        </div>

        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-7">
            <h2 className="main-title">Explore your Future</h2>
            <h5 className="sub-title">Explore all Major fields and Branches</h5>

            <p className="description">
              Helping students build successful careers through <span className="highlight">MBA</span> , <span className="highlight">MCA</span> ,
              <span className="highlight">Engineering</span> , and <span className="highlight">Medical Programs</span> in top universities in{" "}
              <span className="highlight">India</span> and{" "}
              <span className="highlight">Abroad</span>.
            </p>

            {/* Tags */}
            <div className="tags mb-4">
              <span className="tag">
                <i className="bi bi-patch-check-fill"></i> Verified Universities
              </span>
              <span className="tag">
                <i className="bi bi-lightning-fill"></i> Fast Application
                Support
              </span>
            </div>

            {/* Cards */}
            <div className="row g-3">
              {/* Card */}
              {[
                {
                  title: "MBA Coaching Classes",
                  desc: "Top MBA programs in India and Abroad with global career opportunities.",
                },
                {
                  title: "MBA | MCA | PGDM Programs",
                  desc: "Advanced computer applications and software career programs.",
                },
                {
                  title: "Engineering Courses",
                  desc: "Mechanical, Civil, Computer, Electrical and modern engineering programs.",
                },
                {
                  title: "Medical Courses",
                  desc: "MBBS and medical programs from reputed international universities.",
                },
              ].map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="course-card">
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                    <button className="explore-btn">
                      Explore <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE GRID */}
          <div className={`hero-right ${isVisualVisible ? "is-visible" : ""}`}>
            <div className="hex hex-large">
              <img src={mbbs} alt="Students in classroom" />
            </div>

            <div className="hex hex-left">
              <img src={engineering} alt="Education counseling session" />
            </div>

            <div className="hex hex-bottom">
              <img src={mba} alt="Academic success" />
            </div>

            <div className="hex hex-small">
              <img src={coding2} alt="Medical Studies success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
