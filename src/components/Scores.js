import React from "react";

const styles = {
  width: "130px",
  height: "125px",
  margin: "5px",
  display: "inline-block",
  WebkitBoxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  MozBoxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  boxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  backgroundColor: "#CF5300",
  borderRadius: "50%"
};

const spanStyles = {
  marginLeft: "11px",
  fontSize: "1.3rem"
};

const pTagStyles = {
  margin: "15px",
  fontSize: "1.3rem",
  color: "white"
};

const clockStyles = {
  marginTop: "-10px",
  marginLeft: "30px",
  color: "black"
};

const Scores = props => {
  // console.log(props.info);
  const { hTeam, vTeam, clock, startTimeEastern } = props.info;
  return (
    <div style={styles}>
      <p style={pTagStyles}>
        {vTeam.triCode}
        <span style={spanStyles}>{vTeam.score}</span>
      </p>
      <p style={pTagStyles}>
        {hTeam.triCode}
        <span style={spanStyles}>{hTeam.score}</span>
      </p>
      <h5 style={clockStyles}>{clock ? clock : startTimeEastern}</h5>
    </div>
  );
};

export default Scores;
