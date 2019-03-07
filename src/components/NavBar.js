import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Modal from "react-modal";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    isModalOpen: false
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li onClick={this.toggleModal}>SignUp</li>
            <li onClick={this.toggleModal}>LogIn</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
