import React, { Component } from "react";
import Messages from "../components/Messages";

class MessageContainer extends Component {
  state = {
    message: ""
  };

  render() {
    return (
      <div>
        <h3>
          <Messages />
        </h3>
      </div>
    );
  }
}

export default MessageContainer;
