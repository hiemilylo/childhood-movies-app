import React, { Component } from "react";
import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
import MovieList from "./movieList.js";

import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: MovieList
  };

  render() {
    let { movies } = this.state;

    return (
      <div className="container">
        <br />
        <div className="row">
          {movies.map((movie, idx) => {
            if (idx < 3) {
              return (
                <Link
                  key={movie.id}
                  className={"photograph p" + idx}
                  to={`${movie.id}`}
                >
                  <div className="movieContainer">
                    <h5 className="CharName">{movie.name}</h5>
                    <img src={movie.photo} alt={movie.name} />
                  </div>
                </Link>
              );
            }
            return null;
          })}
        </div>
        <div className="row-2">
          {movies.map((movie, idx) => {
            if (2 < idx && idx < 5) {
              return (
                <Link
                  key={movie.id}
                  className={"photograph p" + idx}
                  to={`${movie.id}`}
                >
                  <div className="movieContainer">
                    <h5 className="CharName">{movie.name}</h5>
                    <img src={movie.photo} alt={movie.name} />
                  </div>
                </Link>
              );
            }
            return null;
          })}
        </div>
        <div className="row-3">
          {movies.map((movie, idx) => {
            if (idx >= 5) {
              return (
                <Link
                  key={movie.id}
                  className={"photograph p" + idx}
                  to={`${movie.id}`}
                >
                  <div className="movieContainer">
                    <h5 className="CharName">{movie.name}</h5>
                    <img src={movie.photo} alt={movie.name} />
                  </div>
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

export default MoviesPage;
