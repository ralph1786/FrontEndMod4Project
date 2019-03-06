import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./NavBar.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
    // zIndex: "10"
  }
};

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
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel="Example"
        >
          <h2>It Works</h2>
        </Modal>
      </div>
    );
  }
}

export default NavBar;
