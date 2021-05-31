import React from 'react';
import './App.css';
import Header from './components/Header';
import filmes from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ filmes }> </MovieList>
    </div>
  );
}

export default App;
