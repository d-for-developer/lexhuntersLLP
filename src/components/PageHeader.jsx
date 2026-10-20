
import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="page-header">
      <div className="container page-header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
