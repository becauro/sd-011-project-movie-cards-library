import React from 'react';
import './App.css';
import ListMovies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ ListMovies } />
    </div>
  );
}

export default App;
