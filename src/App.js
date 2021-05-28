import React from 'react';
import './App.css';
import Heaxder from './components/Header';
import filmes from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Heaxder className="page-title" />
      <MovieList movies={ filmes }> </MovieList>
    </div>
  );
}

export default App;
