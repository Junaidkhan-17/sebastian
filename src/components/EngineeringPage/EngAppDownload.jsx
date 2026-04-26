import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import "./EngAppDownload.css";
import coding from "../../assets/coding.jpg";   // replace
import coding2 from "../../assets/coding2.jpg";// replace

function EngAppDownload() {
  return (
    <section className="engapp-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="engapp-content">

              <span className="engapp-badge">
                ANYTIME. ANYWHERE
              </span>

              <h2 className="engapp-title">
                Download App, Apply On The Go!
              </h2>

              <p className="engapp-text">
                We provide engineering admission guidance for B.Tech and M.Tech programs.
              </p>

              {/* STORE BUTTONS */}
              <div className="engapp-store">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="play" />
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="app" />
              </div>

              {/* QR */}
              <div className="engapp-qr">
                <img src={coding} alt="qr" />
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-6">
            <div className="engapp-visual">

              <img src={coding2} alt="phone" className="engapp-phone" />

              {/* FLOAT ICONS */}
              <div className="engapp-float icon1">?</div>
              <div className="engapp-float icon2">⬢</div>
              <div className="engapp-float icon3">?</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EngAppDownload;