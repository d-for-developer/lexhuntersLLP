
import React from "react";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";
import achievementsData from "../data/achievementsData.json";

const achievements = achievementsData;

const Achievements = () => {
  return (
    <>
      <PageHeader
        title="Our Achievements"
        subtitle="Our commitment to professional standards, thoughtful legal strategy, and client service."
      />

      <section className="section container">
        <div className="achievements-intro">
          <h2>Our Commitment to Excellence</h2>
          <p>
            At LexHunters LLP, we believe that meaningful progress comes
            from diligent preparation, responsible advice, and a consistent
            focus on client needs.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item.number}>
              <span className="achievement-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Achievements;
