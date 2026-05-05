import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "./EngAppDownload.css";
import qrcode from "../../assets/qrcode.png";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import enggdownloadimage from "../../assets/enggdownloadimage.png";

function EngAppDownload() {
  return (
    <section
      className="engapp-section"
      style={{ "--engapp-bg-image": `url(${enggdownloadimage})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="engapp-content">
              <span className="engapp-badge">ANYTIME. ANYWHERE</span>

              <h2 className="engapp-title">
                Download Brochure and Track Admissions On The Go
              </h2>

              <p className="engapp-text">
                Access engineering course details, fee structure, and admission
                timelines from your phone.
              </p>

              <div className="engapp-store">
                <a
                  href="https://play.google.com/store/apps/details?id=co.diy7.zfkpc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={googleplay} alt="Google Play Store" />
                </a>

                <a
                  href="https://apps.apple.com/in/app/classplus/id1324522260"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appstore} alt="Apple App Store" />
                </a>
              </div>

              <div className="engapp-qr">
                <h4 className="engapp-qr-title">Create Your Web Classes Account</h4>
                <img src={qrcode} alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngAppDownload;
