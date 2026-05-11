import React, { useEffect, useRef, useState } from "react";
import "./ExploreSection.css";
import mbbsringnew from "../../assets/mbbsringnew.png";
import engineeringringnew from "../../assets/engineeringringnew.png";
import mbaringnew from "../../assets/mbaringnew.png";
import codingringnew from "../../assets/codingringnew.png";
import ringnew from "../../assets/ringnew.png";
import homepagesecond from "../../assets/homepagesecond.png";

function ExploreSection() {

  const sectionRef = useRef(null);

  // ✅ FIRST declare state
  const [isVisualVisible, setIsVisualVisible] = useState(false);

  const images = [mbbsringnew, engineeringringnew, mbaringnew, codingringnew];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateState, setAnimateState] = useState("enter");

  const getCurrentImage = () => images[currentIndex];

  // ✅ THEN useEffect that depends on it
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
  
  // ✅ SECOND useEffect (depends on isVisualVisible)
  useEffect(() => {
    if (!isVisualVisible) return;

    const interval = setInterval(() => {
      setAnimateState("exit");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimateState("enter");
      }, 800);
    }, 3800);

    return () => clearInterval(interval);
  }, [isVisualVisible]);

  return (
    <section className="explore-section" ref={sectionRef}>
      <div
        className="explore-bg"
        style={{ "--explore-bg": `url(${homepagesecond})` }}
      ></div>
      <div className="container">
        {/* Top Bar */}
        <div className="explore-topbar d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <span className="badge-badge">
            <i className="bi bi-mortarboard-fill"></i> Sebastian Institute of
            Education
          </span>
          <span className="hashtag">#PAN India</span>
        </div>

        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-7">
            <h2 className="main-title">Explore Your Future</h2>
            <h5 className="sub-title">Explore all Major fields and Branches</h5>

            <p className="description">
              Helping students build successful careers through{" "}
              <span className="highlight">MBA</span> ,{" "}
              <span className="highlight">MCA</span> ,
              <span className="highlight">Engineering</span> , and{" "}
              <span className="highlight">Medical Programs</span> in top
              universities in <span className="highlight">India</span> and{" "}
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
                <div className="col-12 col-sm-6" key={index}>
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
          <div className="col-12 col-lg-5">
            <div className="ring-container">
              {/* Ring */}
              <img src={ringnew} alt="ring" className="ring-img" />

              {/* Animated Image */}
              <div className={`ring-image ${animateState}`}>
                <img src={getCurrentImage()} alt="course" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ExploreSection;
