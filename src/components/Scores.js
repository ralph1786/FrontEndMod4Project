import React from "react";
import "./Scores.css";

const Scores = props => {
  // console.log(props);
  const {
    hTeam,
    vTeam,
    clock,
    startTimeEastern,
    endTimeUTC,
    period
  } = props.info;
  return (
    <div
      className="Scores"
      onClick={() => props.selectedGameHandler(props.info)}
    >
      <p>
        {vTeam.triCode}
        <span
          className={
            parseInt(vTeam.score) > parseInt(hTeam.score) ? "winningTeam" : null
          }
        >
          {vTeam.score}
        </span>
      </p>
      <p>
        {hTeam.triCode}
        <span
          className={
            parseInt(hTeam.score) > parseInt(vTeam.score) ? "winningTeam" : null
          }
        >
          {hTeam.score}
        </span>
      </p>
      {clock ? (
        <h5>
          {clock} / Qrt-{period.current}
        </h5>
      ) : (
        <h5>{endTimeUTC ? "Final" : startTimeEastern}</h5>
      )}
    </div>
  );
};

export default Scores;
