import React from "react";
import "./PremiumFooter.css";
import newlogo from "./../../assets/newlogo.png";
import newnamelogo1 from "./../../assets/newnamelogo1.png";
import webdocklogo from "./../../assets/webdocklogo.png";

function PremiumFooter() {
  return (
    <footer className="pf-footer">

      <div className="container">

        <div className="row">

          {/* BRAND */}
          <div className="col-lg-4 col-md-6 mb-4">
            <img src={newlogo} className="footer-logo" alt="Sebastian logo" />
            <img src={newnamelogo1} className="footer-logo-name" alt="Sebastian logo" />
            <p className="pf-desc">
              Trusted guidance for MBBS admissions in India & abroad. Helping students achieve their dream medical career with expert counseling.
            </p>
          </div>

          {/* LINKS */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="pf-title">Quick Links</h6>
            <ul className="pf-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="pf-title">Programs</h6>
            <ul className="pf-links">
              <li><a href="#">MBBS in Abroad</a></li>
              <li><a href="#">Engineering Admissions</a></li>
              <li><a href="#">Career Counseling</a></li>
              <li><a href="#">Scholarships</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="pf-title">Contact</h6>

            <p className="pf-contact">
              <i className="bi bi-telephone-fill"></i> +91 99704 44580
            </p>

            <p className="pf-contact">
              <i className="bi bi-envelope-fill"></i> info@vmap.co.in
            </p>

            {/* SOCIAL */}
            <div className="pf-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>

          </div>

          <div className="powered-logo">
            <h4>Powered By</h4>
            <img src={webdocklogo} alt="Powered By" />
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pf-bottom">
          <p>© 2026 Vishwa Medical Admission Point. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default PremiumFooter;