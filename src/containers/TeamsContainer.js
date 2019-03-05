import React from 'react';
import { API_ROOT } from '../constants';
import Cable from './Cable';

import TeamChatroomContainer from "./TeamChatroomContainer";

export default class TeamsContainer extends React.Component {

  state={
    teams: [],
    activeTeam: ""
  }

  componentDidMount(){
    fetch(API_ROOT)
    .then(res => res.json())
    .then(teams => this.setState({ teams }))
  }

  clickTeam = (team) => {
    this.setState({
      activeTeam: team
    }, ()=> console.log("active team clicked:", this.state.activeTeam))
  }

  handleReceivedMessage = response => {
    const { message } = response;
    const teams = [...this.state.teams];
    const team = teams.find(
      team => team.id === message.team_id
    );
    team.messages = [...team.messages, message];
    this.setState({ teams }, ()=> console.log("new teams", this.state.teams));
  };

  render(){

    const teamNames = this.state.teams.map(team => <li key={team.id} onClick={() => this.clickTeam(team)}>{team.name}</li>);

    return(
      <div>
        <h1>Hello from TeamsContainer!</h1>
        <ul>{teamNames}</ul>
        <Cable
            teams={this.state.teams}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        <TeamChatroomContainer activeTeam={this.state.activeTeam}/>
      </div>
    )
  }
}
