
import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import TeamCard from "../components/TeamCard";
import ContactCTA from "../components/ContactCTA";
import servicesData from "../data/servicesData.json";
import teamData from "../data/teamData.json";
import "../styles/home.css";

const Home = () => {
  const services = (servicesData || []).slice(0, 6);
  const team = teamData || [];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-overlay">
          <div className="container home-hero-content">
            <span className="home-eyebrow">
              PROFESSIONAL LEGAL SERVICES
            </span>

            <h1>
              Clarity in Law.
              <br />
              Confidence in Every Step.
            </h1>

            <p>
              Practical legal guidance, thoughtful strategy, and a
              professional approach tailored to your legal needs.
            </p>

            <div className="home-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Case
              </Link>

              <Link to="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container home-intro">
        <span className="section-eyebrow">WELCOME TO LEXHUNTERS LLP</span>

        <h2>Legal Guidance Built Around Your Needs</h2>

        <p>
          Every legal matter deserves careful attention and a clear
          understanding of the available options. Our approach focuses on
          professional service, thorough preparation, and transparent
          communication.
        </p>

        <Link to="/about" className="text-link">
          Learn More About Us →
        </Link>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">OUR PRACTICE AREAS</span>
            <h2>Legal Services We Offer</h2>
            <p>
              Explore our practice areas and find the appropriate starting
              point for your legal inquiry.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {services.length === 0 && (
            <p className="home-empty-message">
              Add practice areas to src/data/siteData.json to display them
              here.
            </p>
          )}

          <div className="home-centered-action">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section container home-why-us">
        <div className="section-heading">
          <span className="section-eyebrow">WHY LEXHUNTERS LLP</span>
          <h2>A Thoughtful Approach to Legal Matters</h2>
        </div>

        <div className="home-benefits-grid">
          <article className="home-benefit">
            <span className="home-benefit-number">01</span>
            <h3>Client-Focused Service</h3>
            <p>
              We take time to understand your concerns, objectives, and
              circumstances.
            </p>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-number">02</span>
            <h3>Careful Preparation</h3>
            <p>
              We value research, structured analysis, and attention to
              relevant details.
            </p>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-number">03</span>
            <h3>Clear Communication</h3>
            <p>
              We aim to explain legal processes and available options in
              straightforward language.
            </p>
          </article>
        </div>
      </section>


      {team.length > 0 && (
        <section className="section home-team">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">OUR TEAM</span>
              <h2>Meet Our Legal Professionals</h2>
              <p>
                Meet the people behind our legal practice, committed to
                professional service and thoughtful legal guidance.
              </p>
            </div>

            <div className="home-team-grid">
              {team.map((member) => (
                <TeamCard
                  key={member.id || member.name}
                  member={member}
                />
              ))}
            </div>

            <div className="home-centered-action">
              <Link to="/team" className="btn btn-primary">
                Meet the Team
              </Link>
            </div>
          </div>
        </section>
      )}


      <ContactCTA />
    </>
  );
};

export default Home;
