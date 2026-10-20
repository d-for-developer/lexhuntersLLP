
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";
import servicesData from "../data/servicesData.json";
import "../styles/pages.css";

const ServiceDetail = () => {
  const { id } = useParams();

  const services = servicesData || [];

  const service = services.find(
    (item) => String(item.id) === String(id)
  );

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const title = service.title || service.name;

  const description =
    service.description ||
    service.shortDescription ||
    "Contact our team to learn more about this legal practice area.";

  return (
    <>
      <PageHeader
        title={title}
        subtitle={service.shortDescription || description}
      />

      <section className="section container service-detail-page">
        <div className="service-detail-main">
          {service.image && (
            <img
              className="service-detail-image"
              src={service.image}
              alt={title}
            />
          )}

          <span className="section-eyebrow">OUR PRACTICE AREAS</span>

          <h2>{title}</h2>

          <p>{description}</p>

          {service.details && (
            <div className="service-detail-description">
              {Array.isArray(service.details) ? (
                service.details.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{service.details}</p>
              )}
            </div>
          )}

          {Array.isArray(service.features) &&
            service.features.length > 0 && (
              <div className="service-detail-features">
                <h3>How We Can Assist</h3>

                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

          <Link to="/services" className="service-detail-back">
            ← Back to All Services
          </Link>
        </div>

        <aside className="service-detail-sidebar">
          <h3>Need Legal Assistance?</h3>

          <p>
            Contact our team to discuss your inquiry and understand
            the appropriate next steps.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </aside>
      </section>

      <ContactCTA />
    </>
  );
};

export default ServiceDetail;
