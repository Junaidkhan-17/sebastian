import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbarbg2 from "../../assets/navbarbg2.png";
import "./Navbar.css";
import newlogo from "./../../assets/newlogo.png";
import newone1 from "./../../assets/newone1.png";
import newnamelogo1 from "./../../assets/newnamelogo1.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid navbar-shell">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <div className="logo-text">
            <img src={newlogo} className="logo-image" alt="sebastian logo"/>
            <img src={newnamelogo1} className="logo-image-name" alt="sebastian logo"/>
          </div>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={handleNavClick}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/mba-coaching" onClick={handleNavClick}>
                MBA Coaching
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/pgdm" onClick={handleNavClick}>
                MBA | MCA | PGDM
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/engineering" onClick={handleNavClick}>
                Engineering
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/mbbs-abroad" onClick={handleNavClick}>
                MBBS Abroad
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="btn contact-btn" to="/contact" onClick={handleNavClick}>
                Contact <i className="bi bi-arrow-right"></i>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
