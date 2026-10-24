
import React from "react";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";

const regionalOffices = [
  "Chandigarh",
  "Shimla",
  "Nainital",
  "Allahabad & Lucknow",
  "Jodhpur & Jaipur",
  "Patna",
  "Ranchi",
  "Guwahati",
  "Kolkata",
  "Cuttack",
  "Jabalpur, Gwalior & Indore",
  "Ahmedabad",
  "Mumbai, Nagpur & Aurangabad",
  "Chennai & Madurai",
  "Bengaluru, Dharwad & Kalaburagi",
  "Ernakulam",
];

const expertiseAreas = [
  "Civil & Criminal Litigation",
  "Alternative Dispute Resolution",
  "Corporate & Company Law",
  "Intellectual Property Law",
  "Taxation & GST",
  "Regulatory & Competition Law",
  "Educational Law",
  "Matrimonial & Family Law",
  "Property & Land Acquisition",
  "Cyber Law",
  "Labour, Service & Employment Law",
  "Insolvency & Debt Recovery",
];

const legalServices = [
  "Drafting legal documents, including agreements, contracts, deeds and wills.",
  "Preparing court pleadings, including plaints, writ petitions, appeals, counter-affidavits, rejoinders and applications.",
  "Filing and conducting cases before courts, tribunals and appropriate legal forums.",
  "Providing legal research, case-law analysis, opinions, advisory services and consultancy.",
  "Assisting with litigation strategy, procedural requirements and legal documentation.",
];

const entrustedTasks = [
  {
    title: "Supreme Court & High Courts",
    description:
      "Representation in matters before the Supreme Court of India, High Courts and their benches, District Courts and appropriate quasi-judicial forums.",
  },
  {
    title: "Educational & Regulatory Matters",
    description:
      "Matters involving educational institutions, educational rights, regulatory compliance and related proceedings before appropriate judicial and statutory authorities.",
  },
  {
    title: "Public Service & Administrative Law",
    description:
      "Service-related matters concerning recruitment, conditions of service and other employment issues before the Central Administrative Tribunal and relevant forums.",
  },
  {
    title: "Corporate & Company Disputes",
    description:
      "Corporate disputes and company-law matters before the National Company Law Tribunal and the National Company Law Appellate Tribunal.",
  },
  {
    title: "Cyber Law & Digital Disputes",
    description:
      "Legal matters involving cybercrime, digital fraud and related regulatory or adjudicatory proceedings.",
  },
  {
    title: "Taxation & Customs",
    description:
      "Matters relating to direct taxation, customs, indirect taxation and GST before appropriate tribunals and authorities.",
  },
  {
    title: "Debt Recovery & Financial Claims",
    description:
      "Debt recovery and financial claims before the Debt Recovery Tribunal, Debt Recovery Appellate Tribunal and other competent forums.",
  },
  {
    title: "Competition & Consumer Matters",
    description:
      "Competition-law proceedings and consumer disputes before the relevant commissions, tribunals and other competent authorities.",
  },
  {
    title: "Railway Claims & Other Tribunals",
    description:
      "Representation in railway claim matters and other proceedings before competent tribunals and statutory bodies.",
  },
];

const About = () => {
  return (
    <>
      <PageHeader
        title="About LexHunters LLP"
        subtitle="Legal knowledge, professional integrity and strategic representation across a broad range of Indian legal matters."
      />

      <section className="section container">
        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            LexHunters LLP is a legal services firm headquartered in
            New Delhi, India, providing assistance across a broad range
            of Indian legal matters. Our practice brings together
            experience in civil and criminal litigation, advisory work,
            regulatory matters and dispute resolution.
          </p>

          <p>
            Our professional approach combines legal knowledge,
            careful preparation, research and a practical understanding
            of our clients' requirements. We aim to address each matter
            with diligence, confidentiality and a commitment to
            professional standards.
          </p>

          <p>
            The firm's professional network includes associated
            regional offices across various parts of India, supporting
            work before courts, tribunals and other appropriate legal
            forums, subject to applicable professional rules and
            jurisdictional requirements.
          </p>

          <h2>Our Vision, Mission & Values</h2>

          <p>
            Our vision is to earn the trust and respect of clients and
            build enduring professional relationships through
            responsible legal service.
          </p>

          <p>
            Our mission is to provide considered, practical and
            effective legal assistance, with attention to the needs of
            each matter and the applicable legal framework.
          </p>

          <ul>
            <li>Integrity, fairness and professional ethics.</li>
            <li>Diligence and careful preparation.</li>
            <li>Clear and responsible communication.</li>
            <li>Confidentiality and respect for client information.</li>
            <li>Professional excellence and social responsibility.</li>
          </ul>

          <h2>Our Areas of Expertise</h2>

          <p>
            Our areas of practice span litigation, advisory work and
            alternative dispute resolution. We focus on understanding
            the circumstances of each matter and identifying
            appropriate legal processes and options.
          </p>

          <ul>
            {expertiseAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <h2>Our Regional Presence</h2>

          <p>
            Headquartered in New Delhi, the firm has identified
            associated regional offices and professional connections
            across the following locations:
          </p>

          <ul>
            {regionalOffices.map((office) => (
              <li key={office}>{office}</li>
            ))}
          </ul>

          <p>
            Our work may involve proceedings before the Supreme Court
            of India, High Courts, District Courts, tribunals,
            commissions and other competent judicial or quasi-judicial
            forums, as applicable to each matter.
          </p>

          <h2>Our Partners & Professional Team</h2>

          <p>
            The firm's supplied professional profile describes a team
            of legal professionals with qualifications from recognized
            universities and relevant professional enrolments. The
            team includes experience in litigation, legal research,
            procedural matters and comprehensive legal practice.
          </p>

          <p>
            Professional credentials, enrolments, memberships and
            individual roles should be confirmed against the relevant
            records before publication.
          </p>

          <h2>Legal Services & Execution</h2>

          <p>
            Our work includes legal drafting, litigation support,
            representation and research, depending on the requirements
            and scope of each engagement.
          </p>

          <ul>
            {legalServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <h2>Matters Entrusted to the Firm</h2>

          <p>
            The firm's stated experience and areas of work include
            the following categories of legal proceedings and
            assignments. The forum and scope of representation depend
            on the particular matter and applicable authorization.
          </p>

          <div className="entrusted-tasks">
            {entrustedTasks.map((task) => (
              <article className="entrusted-task" key={task.title}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </article>
            ))}
          </div>

          <h2>Our Commitment</h2>

          <p>
            LexHunters LLP aims to approach legal matters with
            preparation, professional responsibility and attention
            to the issues involved. We recognize the importance of
            understanding each client's circumstances, explaining
            relevant processes and maintaining appropriate
            communication throughout an engagement.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default About;