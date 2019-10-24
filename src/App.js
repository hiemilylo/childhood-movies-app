import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import MoviesPage from "./containers/MoviesPage/MoviesPage.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
          <Route exact path={appRoutes.movies}>
            <MoviesPage />
          </Route>
          </div>
        </BrowserRouter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
