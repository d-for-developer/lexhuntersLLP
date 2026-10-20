
import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container contact-cta-content">
        <div>
          <h2>Need Legal Guidance?</h2>
          <p>
            Contact our team to discuss your legal inquiry and available
            next steps.
          </p>
        </div>

        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
