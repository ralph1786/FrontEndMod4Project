import React from "react";
import "./ModalContent.css";

const ModalContent = props => {
  //   console.log(props.selectedGame);
  const {
    arena,
    hTeam,
    vTeam,
    nugget,
    startTimeEastern,
    endTimeUTC,
    tickets,
    clock,
    period
  } = props.selectedGame;
  return (
    <div className="game-modal">
      <img
        src="https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png"
        alt="nba logo"
      />
      <h1>{arena.name}</h1>
      {/* <h4>{endTimeUTC ? "Final" : startTimeEastern}</h4> */}
      {clock ? (
        <h4>
          {clock} / Qrt-{period.current}
        </h4>
      ) : (
        <h4>{endTimeUTC ? "Final" : startTimeEastern}</h4>
      )}
      <p
        className={
          parseInt(vTeam.score) > parseInt(hTeam.score)
            ? "visit-team winning-team"
            : "visit-team"
        }
      >
        {vTeam.triCode}
      </p>
      <h5 className="visit-team-record">
        {vTeam.win}-{vTeam.loss}
      </h5>
      <span
        className={
          parseInt(vTeam.score) > parseInt(hTeam.score)
            ? "visit-team-score winning-team"
            : "visit-team-score"
        }
      >
        {vTeam.score}
      </span>
      <p
        className={
          parseInt(hTeam.score) > parseInt(vTeam.score)
            ? "home-team winning-team"
            : "home-team"
        }
      >
        {hTeam.triCode}
      </p>
      <h5 className="home-team-record">
        {hTeam.win}-{hTeam.loss}
      </h5>
      <span
        className={
          parseInt(hTeam.score) > parseInt(vTeam.score)
            ? "home-team-score winning-team"
            : "home-team-score"
        }
      >
        {hTeam.score}
      </span>
      <span>
        <strong>Player Watch: </strong>
        {nugget.text}
      </span>
      {!endTimeUTC ? <a href={tickets.desktopWeb}>Purchase Tickets</a> : null}
    </div>
  );
};

export default ModalContent;
