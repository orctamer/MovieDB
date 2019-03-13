import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MovieRow from "./MovieRow.js";
import noImg from "./noimg.png";
import config from "./config.json";
import popcorn from "./popcorn.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
    this.performSearch();
  }
  performSearch(searchTerm) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          config.key
        }&query=${searchTerm}`
      )
      .then(data => {
        let movies = data.data.results;
        let db = [];
        console.log(movies);
        movies.map(movie => {
          if (!movie.overview) {
            return [];
          }
          movie.poster_src =
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
            movie.poster_path;
          if (!movie.poster_path) {
            movie.poster_src = noImg;
          }
          const movieRow = <MovieRow key={movie.key} movie={movie} />;
          return db.push(movieRow);
        });
        this.setState({ movie: db });
      });
  }
  searchChangeHandler(event) {
    event.preventDefault();
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }
  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundColor: "#000",
            display: "flex",
            color: "#fff",
            fontSize: 24
          }}
        >
          <div
            className="logo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img width="120px" style={{ padding: "1em" }} src={popcorn} />

            <div>
              <h1>MovieDB</h1>
            </div>
          </div>
        </div>
        <input
          style={{
            display: "flex",
            width: "100%",
            padding: "1em 1.5em",
            height: 45,
            fontSize: "1.5rem",
            border: "1px solid #000",
            outline: "none",
            backgroundColor: "#111",
            color: "#ddd"
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter movie title"
        />
        {this.state.movie}
      </div>
    );
  }
}

export default App;
