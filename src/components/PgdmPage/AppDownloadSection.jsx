import React from "react";
import "./AppDownloadSection.css";
import downloadsection from "../../assets/downloadsection.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";

function AppDownloadSection() {
  return (
    <section
      className="pgdm-app-download-section"
      style={{ "--pgdm-bg-image": `url(${downloadsection})` }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6">

            <span className="pgdm-app-tagline">ANYTIME. ANYWHERE</span>

            <h2 className="pgdm-app-title">
              Download Brochure and Track Admissions On The Go
            </h2>

            <p className="pgdm-app-desc">
              Access MBA and MCA course details, fee structure, and admission timelines from your phone.
            </p>

            <div className="store-buttons">
              <img src={googleplay} alt="google" />
              <img src={appstore} alt="apple" />
            </div>

            <div className="qr-card">
              <img src="/images/qr.png" alt="qr" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AppDownloadSection;
