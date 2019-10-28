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
    console.log('hi!' + ' and img: ' + img)
  }

  notHover = () => {
    console.log('left')
  }

  render() {
    let { movies } = this.state;
    // let imgUrl = this.state.nextImg ? this.state.nextImgSrc : this.state.song.imgSrc;
    // let divStyle = {
    //     backgroundImage: 'url(' + imgUrl + ')'
    // }

    return (
      <div className="container" >
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
