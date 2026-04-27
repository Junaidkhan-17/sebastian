import React from "react";
import "./AppDownloadSection.css";
import downloadsection from "../../assets/downloadsection.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import qrcode from "../../assets/qrcode.png";

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
              Access MBA, MCA & PGDM course details, fee structure, and admission
              timelines from your phone.
            </p>

            <div className="store-buttons">
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

            <div className="qr-card">
              <h4 className="create-account">Create Your Web Classes Account</h4>
              <img src={qrcode} alt="qr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownloadSection;
