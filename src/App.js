import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import ChatRoom from "./containers/ChatRoom";

class App extends Component {
  render() {
    return (
      // <Switch>
      //   <Route path="/chatroom" component={ChatRoom} />
      //   <Route path="/" component={Home} />
      // </Switch>
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
