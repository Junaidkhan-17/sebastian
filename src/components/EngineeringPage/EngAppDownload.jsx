import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "./EngAppDownload.css";
import coding from "../../assets/coding.jpg"; // replace
import coding2 from "../../assets/coding2.jpg"; // replace
import qrcode from "../../assets/qrcode.png";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import enggdownloadimage from "../../assets/enggdownloadimage.png";

function EngAppDownload() {
  return (
    <section className="engapp-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="engapp-content">
              <span className="engapp-badge">ANYTIME. ANYWHERE</span>

              <h2 className="engapp-title">Download App, Apply On The Go!</h2>

              <p className="engapp-text">
                We provide engineering admission guidance for B.Tech and M.Tech
                programs.
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

              {/* QR */}
              <div className="engapp-qr">
                <img src={qrcode} alt="QR Code" />
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-6">
            <div className="engapp-visual">
              <img
                src={enggdownloadimage}
                alt="phone"
                className="engapp-phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngAppDownload;
