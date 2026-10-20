
import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for may have been moved, deleted,
          or may not exist.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>

          <Link to="/contact" className="not-found-contact-link">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
