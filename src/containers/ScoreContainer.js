import React, { Component } from "react";
import Scores from "../components/Scores";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";
import "./ScoreContainer.css";
import ModalContent from "../components/ModalContent";

class ScoreContainer extends Component {
  state = {
    leagueScores: [],
    count: 0,
    selectedGame: {},
    showModal: false
  };

  fetchData = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/${moment()
          .subtract(this.state.count, "days")
          .format("YYYYMMDD")}/scoreboard.json`
      )
      .then(res => {
        let games = res.data.games;
        this.setState({
          leagueScores: games
        });
      });
  };

  componentDidMount() {
    this.fetchData();
    Modal.setAppElement("body");
  }

  previousDay = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  nextDay = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  selectedGameHandler = gameObj => {
    this.setState({
      selectedGame: gameObj,
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.fetchData();
    }
  }

  render() {
    console.log(this.state.selectedGame);
    let gameScores = [...this.state.leagueScores].map(game => (
      <Scores
        key={game.gameId}
        info={game}
        selectedGameHandler={this.selectedGameHandler}
      />
    ));

    return (
      <React.Fragment>
        <div>
          <h2 className="Score-headline">Scores</h2>
          <span className="prev-button" onClick={this.previousDay}>
            <i className="fas fa-angle-double-left fa-2x" />
          </span>
          {this.state.count > 0 ? (
            <span className="next-button" onClick={this.nextDay}>
              <i className="fas fa-angle-double-right fa-2x" />
            </span>
          ) : null}
          {gameScores}
        </div>
        <div>
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <ModalContent selectedGame={this.state.selectedGame} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    borderRadius: "20px"
  }
};

export default ScoreContainer;
