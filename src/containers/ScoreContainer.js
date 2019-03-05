import React, { Component } from "react";
import Scores from "../components/Scores";
import axios from "axios";

const URL =
  "https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/20190304/scoreboard.json";

class ScoreContainer extends Component {
  state = {
    leagueScores: []
  };

  componentDidMount() {
    axios.get(`${URL}`).then(res => {
      let games = res.data.games;
      this.setState({
        leagueScores: games
      });
    });
  }

  render() {
    let gameScores = [...this.state.leagueScores].map(game => (
      <Scores key={game.gameId} info={game} />
    ));

    return (
      <div>
        <p>Scores</p>
        {gameScores}
      </div>
    );
  }
}

export default ScoreContainer;
