
import React from "react";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";

const About = () => {
  return (
    <>
      <PageHeader
        title="About LexHunters LLP"
        subtitle="Committed to professional legal services, strategic counsel, and client-focused representation."
      />

      <section className="section container">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            LexHunters LLP is a legal services firm focused on providing
            professional guidance and representation across a range of
            legal matters. We aim to understand each client's circumstances
            and provide clear, practical legal support.
          </p>

          <p>
            Our approach emphasizes preparation, professional integrity,
            confidentiality, and transparent communication throughout the
            legal process.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to help clients understand their legal options
            and navigate complex legal matters through thoughtful advice,
            careful preparation, and professional service.
          </p>

          <h2>Our Approach</h2>
          <ul>
            <li>Understand the client's objectives and circumstances.</li>
            <li>Explain relevant legal options and processes clearly.</li>
            <li>Develop an approach suited to the matter at hand.</li>
            <li>Maintain professional standards and confidentiality.</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            We are committed to handling inquiries responsibly, maintaining
            professional standards, and keeping clients informed about
            relevant developments in their matters.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default About;
