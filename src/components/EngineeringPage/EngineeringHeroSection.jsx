import React from "react";
import "./EngineeringHeroSection.css";
import engineeringbg3 from "../../assets/engineeringbg3.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import engineeringbg4 from "../../assets/engineeringbg4.png";

function EngineeringHeroSection() {
  return (
    <section
      className="engv2-hero"
      style={{
        backgroundImage: `url(${engineeringbg4})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="engg-overlay"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <span className="engv2-badge">
              IN Trusted Engineering Consultancy
            </span>

            <h1 className="engv2-title">
              Get Admission in Top B.Tech, M.Tech & Global Engineering Colleges
            </h1>

            <p className="engv2-desc">
              Expert guidance for engineering admissions with complete
              counselling, documentation support, scholarship planning and
              university selection assistance.
            </p>

            <button className="engv2-btn">Sign Up</button>

            <div className="engv2-store">
              <span>Apply On the Go!</span>

              <div className="engv2-store-btns">
                <img src={googleplay} alt="playstore" />
                <img src={appstore} alt="appstore" />
              </div>
            </div>

            <p className="engv2-trust">
              <i className="bi bi-shield-check"></i>
              We follow Indian education compliance standards and transparent
              admission practices.
            </p>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="engv2-strip">
          <div>⭐ Explore Engineering Programs without confusion</div>
          <div>⭐ Scholarships, Fees & ROI in INR</div>
          <div>⭐ Apply Online, Track Admissions</div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringHeroSection;
