import React from "react";
import { Link } from "react-router-dom";
// import appRoutes from "../../shared/appRoutes";
import MovieList from "../MoviesPage/movieList.js";

// import Logo from "../../assets/imgs/star-wars-logo.png";
import "./MovieScrollList.css";

const MovieScrollList = () => {
  return (
    <div className="scroll-container">
        {MovieList.map((movie, idx) => {
        return (
        <Link
            key={movie.id}
            className="scroll-item-container"
            to={`${movie.id}`}
        >
            <div className="scroll-item">
                <img src={movie.photo} alt={movie.name} />
            </div>
        </Link>
        );
        })}
    </div>
  );
};

export default MovieScrollList;
