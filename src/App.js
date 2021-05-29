import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import filmes from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ filmes } />
    </div>
  );
}

export default App;
