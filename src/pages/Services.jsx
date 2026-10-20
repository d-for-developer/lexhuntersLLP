
import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import ContactCTA from "../components/ContactCTA";
import servicesData from "../data/servicesData.json";
import "../styles/pages.css";

const Services = () => {
  const services = servicesData || [];

  return (
    <>
      <PageHeader
        title="Our Legal Services"
        subtitle="Explore our practice areas and learn how we may assist with your legal needs."
      />

      <section className="section container services-page">
        <div className="section-heading">
          <span className="section-eyebrow">OUR PRACTICE AREAS</span>
          <h2>Legal Support for Different Needs</h2>
          <p>
            Each legal matter is different. Explore our service areas to
            learn more about the types of assistance available.
          </p>
        </div>

        {services.length > 0 ? (
          <div className="services-page-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="services-empty">
            <h3>Services Coming Soon</h3>
            <p>
              Practice areas will appear here once they have been added
              to the website data file.
            </p>
          </div>
        )}
      </section>

      <ContactCTA />
    </>
  );
};

export default Services;
