import React from "react";
import "./News.css";

const News = props => {
  const { title, url } = props.article;
  return (
    <div className="News">
      <a href={url}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default News;
