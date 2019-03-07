import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./Home.css";
// import TeamLogo from "../components/TeamLogo";
import ChatRoom from "./ChatRoom";
import TeamsContainer from "./TeamsContainer";

class Home extends Component {

  state={
    theUser: null
  }

  setUser = (theUser) => {
    this.setState({
      theUser
    })
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            path="/chatroom/:id"
            render={routerProps => {
              let id = routerProps.match.params.id;
              return <ChatRoom theUser={this.state.theUser} id={id} />;
            }}
          />
          <Route path="/" render={(props) => <TeamsContainer setUser={this.setUser}/> } />
        </Switch>
      </Fragment>
    );
  }
}

export default Home;
