
import React, { useEffect, useState } from "react";
import "../styles/consultationModal.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const previous = JSON.parse(
        localStorage.getItem("lexhuntersInquiries") || "[]"
      );

      previous.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        source: "consultation-popup",
      });

      localStorage.setItem(
        "lexhuntersInquiries",
        JSON.stringify(previous)
      );

      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("Could not save inquiry:", error);
      alert("Unable to save this inquiry in your browser. Please try again.");
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="consultation-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <section
        className="consultation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
      >
        <button
          type="button"
          className="consultation-close"
          onClick={closeModal}
          aria-label="Close consultation form"
        >
          &times;
        </button>

        <div className="consultation-modal-heading">
          <span className="consultation-eyebrow">
            LEXHUNTERS LLP
          </span>
          <h2 id="consultation-title">Request a Consultation</h2>
          <p>
            Tell us a little about your legal inquiry. Our team can review
            your request and discuss the appropriate next steps.
          </p>
        </div>

        {submitted ? (
          <div className="consultation-success" role="status">
            <h3>Thank you for your inquiry.</h3>
            <p>
              Your details have been saved in this browser for demonstration
              purposes. The firm has not received your request yet.
            </p>
            <button
              type="button"
              className="consultation-submit"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        ) : (
          <form
            className="consultation-form"
            onSubmit={handleSubmit}
          >
            <div className="consultation-form-grid">
              <div className="consultation-field">
                <label htmlFor="consult-name">Full Name *</label>
                <input
                  id="consult-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="consultation-field">
                <label htmlFor="consult-phone">Phone Number *</label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="consultation-field consultation-field-full">
                <label htmlFor="consult-email">Email Address *</label>
                <input
                  id="consult-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="consultation-field consultation-field-full">
                <label htmlFor="consult-service">
                  Area of Legal Assistance *
                </label>
                <select
                  id="consult-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a practice area</option>
                  <option value="Corporate & Commercial Law">
                    Corporate & Commercial Law
                  </option>
                  <option value="Civil Litigation">Civil Litigation</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Property Law">Property & Real Estate</option>
                  <option value="Contract Drafting">
                    Contract Drafting & Review
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="consultation-field consultation-field-full">
                <label htmlFor="consult-message">
                  Brief Description *
                </label>
                <textarea
                  id="consult-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe how we may assist. Please do not include confidential details."
                  rows={3}
                  required
                />
              </div>
            </div>

            <p className="consultation-disclaimer">
              Submitting this form does not establish an advocate-client
              relationship. Please do not share sensitive or confidential
              documents through this demo form.
            </p>

            <button type="submit" className="consultation-submit">
              Submit Consultation Request
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ConsultationModal;
