import React from "react";
import { useParams } from "react-router";
import MovieList from "../movieList.js";
// import "./CharacterPage.css";

const MoviePage = () => {
  const { id } = useParams();
//   const id = props.id;
  const movie = MovieList.filter(movie => movie.id === id)[0];
  const { name, photo, keyline, who, why } = movie;

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img style={{ width: "100%" }} src={photo} alt={name} />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h1 className="CharacterName">{name}</h1>
          <p className="KeylineContainer">{keyline}</p>
          <br />
          <br />

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
  );
};

export default MoviePage;
