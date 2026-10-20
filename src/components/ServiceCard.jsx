
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  if (!service) return null;

  return (
    <article className="service-card">
      <div className="service-card-icon">
        {service.icon || "§"}
      </div>

      <div className="service-card-content">
        <h3>{service.title || service.name}</h3>

        <p>
          {service.shortDescription ||
            service.description ||
            "Learn more about this legal practice area and the services available."}
        </p>

        <Link
          to={`/services/${service.id}`}
          className="service-card-link"
          aria-label={`Learn more about ${service.title || service.name}`}
        >
          Learn More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
