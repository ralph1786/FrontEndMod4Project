import React, { Component } from "react";
import News from "../components/News";
import "./NewsContainer.css";
import axios from "axios";

const url =
  "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=3a988bb9e17f4ef2a7a8099740a3a3f1";

class NewsContainer extends Component {
  state = {
    newsHeadLines: []
  };

  componentDidMount() {
    axios.get(`${url}`).then(res => {
      // console.log(res.data.articles);
      const articles = res.data.articles;
      // console.log(articles);
      this.setState({
        newsHeadLines: articles
      });
    });
  }

  render() {
    let articles = [...this.state.newsHeadLines].map((article, index) => (
      <News key={index} article={article} />
    ));

    return (
      <div>
        <h2 className="news-headline">Headlines</h2>
        {articles}
      </div>
    );
  }
}

export default NewsContainer;
