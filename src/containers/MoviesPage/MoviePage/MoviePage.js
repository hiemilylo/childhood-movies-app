import React from "react";
import { useParams } from "react-router";
import MovieList from "../movieList.js";
import MovieScrollList from "../../MovieScrollList/MovieScrollList"
import "./MoviePage.css";

const MoviePage = () => {
  const { id } = useParams();
//   const id = props.id;
  const movie = MovieList.filter(movie => movie.id === id)[0];
  const { name, photo, keyline, who, why } = movie;

  return (
    <div>
      <MovieScrollList />
      <div className="movie-container">
      <h1 className="MovieName">{name}</h1>
      <div className="Movie-Header">
        <div className="movie-img">
          <img style={{ width: "100%" }} src={photo} alt={name} />
        </div>
        <p className="KeylineContainer">{keyline}</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">

          <h4>Who?</h4>
          {who.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
          <h4>Why?</h4>
          {why.map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default MoviePage;
