import React from 'react';
import { Switch, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import MoviesPage from "./containers/MoviesPage/MoviesPage.js";
import MoviePage from "./containers/MoviesPage/MoviePage/MoviePage.js";

import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path={appRoutes.movies}>
            <MoviesPage />
          </Route>
          <Route exact path={appRoutes.movie}>
            <MoviePage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
