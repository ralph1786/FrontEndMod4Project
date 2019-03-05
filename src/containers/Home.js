import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../components/NavBar";
import video from "../Assets/Video/basketball.mp4";
import TeamLogo from "../components/TeamLogo";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="v-header container">
          <div className="fullscreen-video-wrap">
            <video autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="header-overlay" />
          <span>
            <i className="fas fa-basketball-ball" /> FanChat
          </span>

          <div className="top-navbar">
            <NavBar />
          </div>
          <div className="logo-container">
            <TeamLogo />
          </div>
          <div className="header-content">
            <p>Welcome NBA fans! </p>
            <Link to={""}>
              <button className="btn">Start Chat</button>
            </Link>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Home;
