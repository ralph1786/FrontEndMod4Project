import React from "react";
import { API_ROOT, HEADERS } from "../constants";
// import Cable from "./Cable";
import { Link } from "react-router-dom";
// import TeamLogo from "../components/TeamLogo";
import NavBar from "../components/NavBar";
import video from "../Assets/Video/basketball.mp4";

export default class TeamsContainer extends React.Component {
  state = {
    teams: [],
    activeTeam: "",
    theUser: {}
  };

  componentDidMount() {
    fetch(API_ROOT)
      .then(res => res.json())
      .then(teams => this.setState({ teams }));
  }

  clickTeam = team => {
    this.setState(
      {
        activeTeam: team
      },
      () => console.log("active team clicked:", this.state.activeTeam)
    );
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const teams = [...this.state.teams];
    const team = teams.find(team => team.id === message.team_id);
    team.messages = [...team.messages, message];
    this.setState({ teams }, () => console.log("new teams", this.state.teams));
  };

  submitUser = (user) => {
    console.log("USER: ", user)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: user
      })
    })
    .then(res => res.json())
    .then(theUser => this.setState({
      theUser
    }, ()=> console.log("state user:", this.state.theUser)))
    .then(theUser => this.props.setUser(theUser))

  }

  logOut = () => {
    this.setState({
      theUser: {}
    });
    this.props.setUser({});
  }

  render() {
    const teamLogos = this.state.teams.map(team => (
      <Link key={team.id} to={`/chatroom/${team.id}`}>
        <img
          alt="nba-team-logo"
          key={team.id}
          src={team.logo}
          onClick={() => this.clickTeam(team)}
        />
      </Link>
    ));

    return (
      <div>
        {/*
          <ul>{teamLogos}</ul>
        */}
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
            <NavBar submitUser={this.submitUser} theUser={this.state.theUser} logOut={this.logOut}/>
          </div>
          <div className="logo-container">{teamLogos}</div>
          <div className="header-content">
            <p>Welcome NBA fans! </p>
            <Link to={""}>
              <button className="btn">Start Chat</button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
