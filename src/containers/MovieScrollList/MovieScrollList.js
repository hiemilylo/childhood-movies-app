import React from "react";
import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
import MovieList from "../MoviesPage/movieList.js";

// import Logo from "../../assets/imgs/star-wars-logo.png";
import "./MovieScrollList.css";

const MovieScrollList = () => {
  return (
    <div className="scroll-container">
        <div className="home-button">
            <Link
                key={'hi'}
                to={`/`}
                className="scroll-item-container">
                <h5 className="home-link">Home</h5>
            </Link>
        </div>
        {MovieList.map((movie, idx) => {
        return (
        <Link
            key={movie.id}
            to={`${movie.id}`}
            className="scroll-item-container"
        >
            <div className="scroll-item">
                <h5 className="scroll-name">{movie.name}</h5>
                <img src={movie.photo} alt={movie.name} />
            </div>
        </Link>
        );
        })}
    </div>
  );
};

export default MovieScrollList;
