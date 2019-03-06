import React from 'react';
import MessagesContainer from "./MessagesContainer";
import { API_ROOT } from '../constants';
import Cable from './Cable';

export default class TeamChatroomContainer extends React.Component {

  state={
    team: {}
  }

  componentDidMount(){
    fetch(API_ROOT +'/' + this.props.id)
    .then(res => res.json())
    .then(data => this.setState({
      team: data
    }), ()=> console.log(this.state.team))
  }

  handleReceivedMessage = response => {
    const { message } = response;
    const team = {...this.state.team};
    team.messages = [...team.messages, message];
    this.setState({ team }, ()=> console.log("new team", this.state.team));
  };

  render(){
    return (
      <div>
      {this.state.team.name ?
        <>
        <Cable
        team={this.state.team}
        handleReceivedMessage={this.handleReceivedMessage}
        />
        <h2>Active team: {this.state.team.name}</h2><MessagesContainer activeTeam={this.state.team}/></>
      :
      <h2>Select a team.</h2> }

      </div>
    )
  }
}
