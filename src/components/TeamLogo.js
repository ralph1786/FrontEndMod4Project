import React from "react";
import Teams from "../db";

const TeamLogo = () => {
  const teams = Teams.map(team => <img src={team.logo} alt="team logo" />);

  // return <div className="team-logo">{teams}</div>;
  return teams;
};

export default TeamLogo;
