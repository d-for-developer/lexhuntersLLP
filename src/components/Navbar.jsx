
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ConsultationModal from "./ConsultationModal";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);


  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <img
              src="/images/lexhunters-logo.png"
              alt="LexHunters LLP"
              className="navbar-logo"
            />
          </Link>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Practice Areas
            </NavLink>

            <NavLink to="/team" onClick={closeMenu}>
              Our Team
            </NavLink>

            <NavLink to="/achievements" onClick={closeMenu}>
              Achievements
            </NavLink>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
            <button
              type="button"
              className="navbar-contact"
              onClick={() => {
                closeMenu();
                setConsultationOpen(true);
              }}
            >
              Request Consultation
            </button>
          </nav>
        </div>
      </header>
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};

export default Navbar;
