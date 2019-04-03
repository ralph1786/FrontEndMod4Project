import React from "react";
import "./Scores.css";

const Scores = props => {
  // console.log(props.info);
  const { hTeam, vTeam, clock, startTimeEastern } = props.info;
  return (
    <div className="Scores">
      <p>
        {vTeam.triCode}
        <span>{vTeam.score}</span>
      </p>
      <p>
        {hTeam.triCode}
        <span>{hTeam.score}</span>
      </p>
      <h5>{clock ? clock : startTimeEastern}</h5>
    </div>
  );
};

export default Scores;
