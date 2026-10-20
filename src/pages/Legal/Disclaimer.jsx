
import React from "react";
import PageHeader from "../../components/PageHeader";

const Disclaimer = () => {
  return (
    <>
      <PageHeader
        title="Disclaimer"
        subtitle="Important information about our website and legal services."
      />

      <section className="section container legal-content">
        <h2>General Information</h2>
        <p>
          The information provided on the LexHunters LLP website is for
          general informational purposes only. It should not be considered
          legal advice or a substitute for professional legal consultation.
        </p>

        <h2>No Lawyer-Client Relationship</h2>
        <p>
          Visiting this website, submitting an inquiry, or contacting our
          firm through this website does not automatically establish a
          lawyer-client relationship.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          We make reasonable efforts to keep website information accurate
          and current. However, we do not guarantee that all information
          is complete, accurate, or up to date.
        </p>

        <h2>External Links</h2>
        <p>
          This website may contain links to third-party websites. LexHunters
          LLP is not responsible for the content or privacy practices of
          external websites.
        </p>

        <h2>Contact</h2>
        <p>
          For advice relating to a specific legal matter, please contact
          the firm directly and arrange a consultation.
        </p>
      </section>
    </>
  );
};

export default Disclaimer;
