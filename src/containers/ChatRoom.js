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
    team: {}
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
                <h2 style={styles}>Team: {this.state.team.name}</h2>
                <MessagesContainer activeTeam={this.state.team} />
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
  textAlign: "center"
};

export default ChatRoom;
