import React, { Component } from "react";
import Message from "../components/Message";
import { HEADERS } from "../constants";
import NewMessageForm from "../components/NewMessageForm";

class MessagesContainer extends Component {
  state = {
    text: ""
  };

  onChangeHandler = event => {
    this.setState(
      {
        text: event.target.value
      },
      () => console.log(this.state.text)
    );
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const obj = {
      text: this.state.text,
      team_id: this.props.activeTeam.id,
      user_id: 1
    };

    console.log(obj);

    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(obj)
    })
      // .then(res => res.json())
      .then(() => {
        this.setState({
          text: ""
        });
      });

    // axios.post("http://localhost:3000/" + 'messages', obj)
    // .then(res => console.log(res.data))
    // .catch(error => console.log(error))
  };

  render() {
    console.log(this.props);
    const messages = this.props.activeTeam.messages.map(message => (
      <Message info={message} key={message.id} />
    ));
    return (
      <div>
        <div style={{ marginBottom: "30%" }}>{messages}</div>
        <NewMessageForm
          activeTeam={this.props.activeTeam}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          value={this.state.text}
        />
      </div>
    );
  }
}

export default MessagesContainer;
