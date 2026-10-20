
import React from "react";

const TeamCard = ({ member }) => {
  if (!member) return null;

  return (
    <article className="team-card">
      <div className="team-card-image">
        {member.image ? (
          <img src={member.image} alt={member.name || "Team member"} />
        ) : (
          <div className="team-card-placeholder">
            <span>
              {(member.name || "L").charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="team-card-content">
        <h3>{member.name}</h3>
        <p className="team-card-role">{member.designation || member.role}</p>

        {member.specialization && (
          <p className="team-card-specialization">
            {member.specialization}
          </p>
        )}

        {member.bio && <p className="team-card-bio">{member.bio}</p>}
      </div>
    </article>
  );
};

export default TeamCard;
