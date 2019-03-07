import React, { Component } from "react";
import Scores from "../components/Scores";
import axios from "axios";
import moment from "moment";

class ScoreContainer extends Component {
  state = {
    leagueScores: [],
    date: moment().format("YYYYMMDD")
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/${
          this.state.date
        }/scoreboard.json`
      )
      .then(res => {
        let games = res.data.games;
        this.setState({
          leagueScores: games
        });
      });
  }

  render() {
    console.log("date", this.state.date);
    let gameScores = [...this.state.leagueScores].map(game => (
      <Scores key={game.gameId} info={game} />
    ));

    return (
      <div>
        <h2 style={styles}>Scores</h2>
        {gameScores}
      </div>
    );
  }
}

const styles = {
  textAlign: "center",
  color: "white",
  fontFamily: "Impact",
  fontSize: "2.3em"
};

export default ScoreContainer;
