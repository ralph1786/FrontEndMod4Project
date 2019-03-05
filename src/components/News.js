import React from "react";

// -webkit - box - shadow: 10px 10px 5px 0px rgba(128, 123, 128, 1);
// -moz - box - shadow: 10px 10px 5px 0px rgba(128, 123, 128, 1);
// box - shadow: 10px 10px 5px 0px rgba(128, 123, 128, 1);

const styles = {
  WebkitBoxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  MozBoxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  boxShadow: "10px 10px 5px -5px rgba(181,174,181,1)",
  margin: "10px",
  backgroundColor: "#faf8f5"
};

const linkStyles = {
  color: "black",
  textDecoration: "none"
};

const News = props => {
  // console.log(props.article);

  const { title, url } = props.article;
  return (
    <div style={styles}>
      <a href={url} style={linkStyles}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default News;
