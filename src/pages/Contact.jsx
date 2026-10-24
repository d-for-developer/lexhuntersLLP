
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

    setSubmitted(false);
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
      alert(
        "Unable to save your inquiry in this browser. Please try again."
      );
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Contact Mayank Ravi Legal Associates for information about our legal practice and offices."
      />

      <section className="section container contact-page">
        <div className="contact-info">
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>Mayank Ravi Legal Associates</h2>

          <p>
            Our head office is located in New Delhi, with regional
            offices across several cities and chambers at the Supreme
            Court of India.
          </p>

          <div className="contact-info-item">
            <h3>Head Office</h3>
            <p>
              Q-22-B, Jangpura Extension,
              <br />
              New Delhi – 110014, India
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Q-22-B+Jangpura+Extension+New+Delhi+110014"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions →
            </a>
          </div>

          <div className="contact-info-item">
            <h3>Supreme Court Chambers</h3>
            <p>
              20-A, Lawyers Chambers,
              <br />
              Supreme Court of India,
              <br />
              New Delhi – 110001
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=20-A+Lawyers+Chambers+Supreme+Court+of+India+New+Delhi"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions →
            </a>
          </div>

          <div className="contact-info-item">
            <h3>Regional Offices</h3>
            <p>
              Chandigarh, Lucknow, Jaipur, Patna, Kolkata, Indore,
              Mumbai and Bangalore.
            </p>
          </div>

          <div className="contact-info-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:mayankravilegaloffice@gmail.com">
                mayankravilegaloffice@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-info-item">
            <h3>Telephone</h3>
            <p>
              <a href="tel:+911147522337">011-47522337</a>
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send an Inquiry</h2>

          <p className="contact-form-description">
            Fields marked with * are required.
          </p>

          {submitted && (
            <div className="form-success" role="status">
              Your inquiry has been saved in this browser. This is a
              demo form; your message has not been sent to the firm.
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
              <label htmlFor="service">
                Area of Legal Assistance *
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Civil Litigation">Civil Litigation</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Corporate & Company Law">
                  Corporate & Company Law
                </option>
                <option value="Educational Law">Educational Law</option>
                <option value="Intellectual Property">
                  Intellectual Property
                </option>
                <option value="Taxation & GST">Taxation & GST</option>
                <option value="Cyber Law">Cyber Law</option>
                <option value="Family & Matrimonial Law">
                  Family & Matrimonial Law
                </option>
                <option value="Property Law">Property Law</option>
                <option value="Employment Law">Employment Law</option>
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
                rows={5}
                required
              />
            </div>

            <p className="contact-privacy-note">
              Please avoid including sensitive or confidential
              documents in this demo form. Submitting this form does
              not establish an advocate-client relationship.
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
