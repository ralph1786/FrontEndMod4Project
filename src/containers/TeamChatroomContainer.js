import React from 'react';
import MessagesContainer from "./MessagesContainer";

export default class TeamChatroomContainer extends React.Component {

  render(){
    return (
      <div>
      {this.props.activeTeam.name ?
        <><h2>Active team: {this.props.activeTeam.name}</h2><MessagesContainer activeTeam={this.props.activeTeam}/></> 
      :
      <h2>Select a team.</h2> }

      </div>
    )
  }
}
