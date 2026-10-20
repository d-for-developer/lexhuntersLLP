
import React from "react";
import PageHeader from "../components/PageHeader";
import TeamCard from "../components/TeamCard";
import ContactCTA from "../components/ContactCTA";
import teamData from "../data/teamData.json";
import "../styles/pages.css";

const Team = () => {
  const team = teamData || [];

  return (
    <>
      <PageHeader
        title="Meet Our Team"
        subtitle="Get to know the professionals behind LexHunters LLP."
      />

      <section className="section container team-page">
        <div className="section-heading">
          <span className="section-eyebrow">OUR PEOPLE</span>
          <h2>Professional Guidance, Personal Attention</h2>
          <p>
            Our team page introduces the people who contribute to our
            legal services. Explore their profiles and areas of practice.
          </p>
        </div>

        {team.length > 0 ? (
          <div className="team-page-grid">
            {team.map((member, index) => (
              <TeamCard
                key={member.id || member.name || index}
                member={member}
              />
            ))}
          </div>
        ) : (
          <div className="team-empty">
            <h3>Our Team Profiles Are Coming Soon</h3>
            <p>
              Add verified team member information to
              <code> src/data/siteData.json </code>
              to display profiles here.
            </p>
          </div>
        )}
      </section>

      <ContactCTA />
    </>
  );
};

export default Team;
