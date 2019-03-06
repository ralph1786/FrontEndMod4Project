import React from "react";

const styles = {
  width: "120px",
  height: "95px",
  margin: "5px",
  display: "inline-block",
  WebkitBoxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  MozBoxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  boxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  backgroundColor: "#faf8f5"
};

const spanStyles = {
  marginLeft: "11px",
  fontSize: "1.3rem"
};

const pTagStyles = {
  margin: "5px",
  fontSize: "1.3rem"
};

const Scores = props => {
  // console.log(props.info);
  const { hTeam, vTeam } = props.info;
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
    </div>
  );
};

export default Scores;
