import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

const App = () => (
  <div className="App">
    <Header />
    <MovieList movies={ movies } />
  </div>
);

export default App;

// Source: consulta ao repositório https://github.com/tryber/sd-011-project-movie-cards-library/pull/185/
