import React, { Component } from "react";
import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
import MovieList from "./movieList.js";

import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: MovieList
  };

  hoverHandler = (img) => () => {
    console.log('hi! and img: ' + img)
    this.setState({ bckImg: img })
  }

  notHover = () => {
    console.log('left')
    this.setState({ bckImg: null })
  }

  render() {
    let { movies } = this.state;
    let divStyle = (this.state.bckImg == null) ?
      {
        // backgroundImage: 'url(' + this.state.bckImg + ')'
        'background-color': '#FFFFFF'
      } :
      {
        // backgroundImage: 'url(' + this.state.bckImg + ')'
        'background-color': '#000000'
      }

    return (
      <div className="container" style={divStyle}>
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
                       onMouseEnter={this.hoverHandler(movie.id)}
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
