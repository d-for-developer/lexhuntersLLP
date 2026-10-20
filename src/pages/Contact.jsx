
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inquiry = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existingInquiries = JSON.parse(
        localStorage.getItem("lexhuntersInquiries") || "[]"
      );

      existingInquiries.push(inquiry);

      localStorage.setItem(
        "lexhuntersInquiries",
        JSON.stringify(existingInquiries)
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Unable to save inquiry:", error);
      alert("Unable to save your inquiry in this browser. Please try again.");
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with LexHunters LLP to discuss your legal inquiry."
      />

      <section className="section container contact-page">
        <div className="contact-info">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2>Let's Discuss Your Legal Needs</h2>
          <p>
            Share a brief overview of your inquiry using the form. Our team
            can review your request and advise you on the appropriate next
            steps.
          </p>

          <div className="contact-info-item">
            <h3>Office</h3>
            <p>
              Please add your verified office address here.
            </p>
          </div>

          <div className="contact-info-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:info@lexhunters.com">
                info@lexhunters.com
              </a>
            </p>
            <small>Replace this with your firm's verified email address.</small>
          </div>

          <div className="contact-info-item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+910000000000">+91 XXXXX XXXXX</a>
            </p>
            <small>Replace this with your firm's verified phone number.</small>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send an Inquiry</h2>
          <p className="contact-form-description">
            Fields marked with * are required.
          </p>

          {submitted && (
            <div className="form-success" role="status">
              Your inquiry has been saved in this browser. This is a demo
              form and your message has not been sent to the firm.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Area of Legal Assistance *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Corporate Law">Corporate Law</option>
                <option value="Civil Litigation">Civil Litigation</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Property Law">Property Law</option>
                <option value="Contract Drafting">Contract Drafting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">How Can We Help? *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your inquiry. Avoid sharing confidential details."
                rows="5"
                required
              />
            </div>

            <p className="contact-privacy-note">
              Please do not include sensitive or confidential documents in
              this demo form. Submitting this form does not establish an
              advocate-client relationship.
            </p>

            <button type="submit" className="btn btn-primary">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
