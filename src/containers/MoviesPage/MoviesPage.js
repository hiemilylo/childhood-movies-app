import React, { Component } from "react";
import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
import MovieList from "./movieList.js";

import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: MovieList
  };

  hoverHandler = (idx) => () => {
    this.setState({ bckImg: idx })
  }

  notHover = () => {
    this.setState({ bckImg: null })
  }

  render() {
    let { movies } = this.state;
    let opaque = (idx) => (this.state.bckImg === idx) ?
      {
        opacity: 0.8
      } :
      {
        opacity: 0
      }

    return (
      <div className="container">
        {movies.map((movie, idx) => {
          return (
            <img
                 key={idx}
                 style={opaque(idx)}
                 className={"background-image"}
                 src={movie.back}
                 alt={movie.movieName + " scenery"}
                 />
          );
        })}
        <div className="row">
          {movies.map((movie, idx) => {
            if (idx < 3) {
              return (
                <Link
                  key={movie.id}
                  className={"photograph p" + idx}
                  to={`${movie.id}`}
                >
                  <div className="movieContainer"
                       onMouseEnter={this.hoverHandler(idx)}
                       onMouseLeave={this.notHover}>
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
                  <div className="movieContainer"
                       onMouseEnter={this.hoverHandler(idx)}
                       onMouseLeave={this.notHover}>
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
                  <div className="movieContainer"
                       onMouseEnter={this.hoverHandler(idx)}
                       onMouseLeave={this.notHover}>
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
