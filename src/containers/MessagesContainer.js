import React, { Component } from "react";
import Message from "../components/Message";
import NewMessageForm from "../components/NewMessageForm";
import { HEADERS } from '../constants';
import axios from 'axios';

class MessagesContainer extends Component {
  state = {
    text: ""
  };

  onChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    }, ()=> console.log(this.state.text))
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const obj = {
      text: this.state.text,
      team_id: this.props.activeTeam.id,
      user_id: 1
    }

    console.log(obj);

    fetch("http://localhost:3000/" + 'messages', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        text: this.state.text,
        team_id: this.props.activeTeam.id,
        user_id: 1
      })
    })
    this.setState({
      text: ""
    })



    // axios.post("http://localhost:3000/" + 'messages', obj)
    // .then(res => console.log(res.data))
    // .catch(error => console.log(error))



  }

  deleteHandler = (msg) => {
    fetch(`http://localhost:3000/messages/${msg.id}`, {
      method: "DELETE",
      headers: HEADERS,
    })
    .then(console.log)
  }

  editHandler = (msg) => {
    console.log(msg);
  }

  render() {
    const messages = this.props.activeTeam.messages.map(message =>
      <Message
      deleteHandler={this.deleteHandler}
      editHandler={this.editHandler}
      info={message}
      key={message.id}
      />
    )
    return (
      <div>
        <h3>
          {messages}
          <NewMessageForm
          activeTeam={this.props.activeTeam}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          value={this.state.text}/>
        </h3>
      </div>
    );
  }
}

export default MessagesContainer;
