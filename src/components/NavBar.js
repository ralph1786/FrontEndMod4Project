import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Modal from "react-modal";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    isModalOpen: false,
    user: ""
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  submitUser = (event) => {
    event.preventDefault();
    this.props.submitUser(this.state.user);
    this.setState({
      user: ""
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>

            {Object.keys(this.props.theUser).length > 0 ? <><li>Welcome, {this.props.theUser.username}</li>
            <li onClick={this.props.logOut}>Log Out</li></>
              :
              <><li><form onSubmit={event => this.submitUser(event)}>
                <input
                onChange={event => this.setState({ user: event.target.value }, ()=> console.log(this.state.user))}
                value={this.state.user}
                type="text"
                placeholder="name"/>
                <button type="submit">Go</button>
                </form></li>
              <li>LogIn</li></>}

            {/*
            <li onClick={this.toggleModal}>SignUp</li>
            */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
