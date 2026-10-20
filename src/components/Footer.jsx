
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import "../styles/footer.css";

const Footer = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>LEXHUNTERS LLP</h2>
            <p>
              Legal counsel grounded in clarity, integrity, and
              professional service.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Practice Areas</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/disclaimer">Legal Disclaimer</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>Have a legal inquiry?</p>
            <button
              type="button"
              className="footer-consultation-button"
              onClick={() => setConsultationOpen(true)}
            >
              Request a Consultation →
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} LexHunters LLP. All rights reserved.
          </p>
        </div>
      </footer>
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};

export default Footer;
