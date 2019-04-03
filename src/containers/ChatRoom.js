import React, { Component } from "react";
import NewsContainer from "./NewsContainer";
// import InputBox from "../components/InputBox";
import MessagesContainer from "./MessagesContainer";
import ScoreContainer from "./ScoreContainer";
import { API_ROOT } from "../constants";
import Cable from "./Cable";
import "./ChatRoom.css";

class ChatRoom extends Component {
  state = {
    team: {},
    theUser: this.props.theUser
  };

  componentDidMount() {
    console.log("mounted");

    fetch(API_ROOT + "/" + this.props.id)
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            team: data
          },
          () => console.log("team:", this.state.team)
        )
      );
  }

  handleReceivedMessage = response => {
    const { message } = response;
    const team = { ...this.state.team };
    team.messages = [...team.messages, message];
    this.setState({ team }, () => console.log("new team", this.state.team));
  };

  render() {
    return (
      <div className="chatRoom-container">
        <div className="news">
          <NewsContainer />
        </div>
        <div className="scores">
          <ScoreContainer />
        </div>
        <div className="messageContainer">
          {/* <MessagesContainer /> */}
          <div>
            {this.state.team.name ? (
              <>
                <Cable
                  team={this.state.team}
                  handleReceivedMessage={this.handleReceivedMessage}
                />
                <img
                  src={this.state.team.logo}
                  style={styles}
                  alt="team-logo"
                />
                <h3 style={stylesName}>{this.state.team.name}</h3>
                <MessagesContainer
                  activeTeam={this.state.team}
                  theUser={this.state.theUser}
                />
              </>
            ) : (
              <h2>Select a team.</h2>
            )}
          </div>
        </div>
        {/* <div className="inputBox">
          <InputBox />
        </div> */}
      </div>
    );
  }
}

const styles = {
  position: "fixed",
  marginLeft: "47%",
  marginTop: "10px",
  width: "100px",
  height: "100px"
};

const stylesName = {
  position: "fixed",
  marginLeft: "46%",
  marginTop: "120px"
};

export default ChatRoom;
