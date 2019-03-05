import React, { Component } from "react";
import NewsContainer from "./NewsContainer";
import InputBox from "../components/InputBox";
import MessagesContainer from "./MessagesContainer";
import ScoreContainer from "./ScoreContainer";
import "./ChatRoom.css";

class ChatRoom extends Component {
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
          <MessagesContainer />
        </div>
        <div className="inputBox">
          <InputBox />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
