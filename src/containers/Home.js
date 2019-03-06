import React, { Component, Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import TeamLogo from "../components/TeamLogo";
import ChatRoom from "./ChatRoom";
import TeamsContainer from "./TeamsContainer";

class Home extends Component {
  render() {
    return (

      <Fragment>
        <Switch>
          <Route
            path="/chatroom/:id"
            render={routerProps => {
              let id = routerProps.match.params.id;
              return <ChatRoom id={id} />;
            }}
          />
          <Route path="/" component={TeamsContainer} />
        </Switch>
      </Fragment>


    );
  }
}

export default Home;
