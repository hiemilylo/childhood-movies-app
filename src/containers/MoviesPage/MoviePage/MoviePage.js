import React from "react";
import { useParams } from "react-router";
import MovieList from "../movieList.js";
import MovieScrollList from "../../MovieScrollList/MovieScrollList"
import "./MoviePage.css";

const MoviePage = () => {
  const { id } = useParams();
//   const id = props.id;
  const movie = MovieList.filter(movie => movie.id === id)[0];
  const { movieName, location, locPhoto, locSummary, photo, summary } = movie;

  return (
    <div>
      <MovieScrollList />
      <div className="movie-container">
        <h1 className="MovieName">{movieName}</h1>
        <div className="Movie-Header">
          <div className="movie-img">
            <img src={photo} alt={movieName} />
          </div>
          <p className="movie-sypnopsis">{summary}</p>
        </div>
        <div className="location-container">
          <h1 className="LocationName">{location}</h1>
          <div className="movie-img">
            <img src={locPhoto} alt={movieName} />
          </div>
          <p>{locSummary}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
