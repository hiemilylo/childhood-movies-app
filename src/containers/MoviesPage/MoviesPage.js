import React, { Component } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import { sortBy } from "lodash";
import MovieList from "./movieList.js";

import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: MovieList
  };

  render() {
    let { movies } = this.state;
    movies = sortBy(movies, ["rank"]);

    return (
      <div className="container">
        <br />
        <div className="row">
          {movies.map((movie, idx) => {
            return (
              <Link
                key={movie.id}
                className="photograph"
                to={`${appRoutes.movies}`}
              >
                <div className="movieContainer">
                  <h5 className="CharName">{movie.name}</h5>
                  <img src={movie.photo} alt={movie.name} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoviesPage;
