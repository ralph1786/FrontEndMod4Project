import React from "react";
import { Link } from "react-router-dom";
import Teams from "../db";

const TeamLogo = () => {
  const teams = Teams.map(team => (
    <Link to={""} key={team.teamId}>
      <img src={team.logo} alt="team logo" />
    </Link>
  ));

  return <div className="team-logo">{teams}</div>;
};

export default TeamLogo;
