import React from "react";
import "./Scores.css";

const Scores = props => {
  // console.log(props.info);
  const { hTeam, vTeam, clock, startTimeEastern } = props.info;
  return (
    <div className="Scores">
      <p>
        {vTeam.triCode}
        <span className={vTeam.score > hTeam.score ? "winningTeam" : null}>
          {vTeam.score}
        </span>
      </p>
      <p>
        {hTeam.triCode}
        <span className={hTeam.score > vTeam.score ? "winningTeam" : null}>
          {hTeam.score}
        </span>
      </p>
      <h5>{clock ? clock : startTimeEastern}</h5>
    </div>
  );
};

export default Scores;
