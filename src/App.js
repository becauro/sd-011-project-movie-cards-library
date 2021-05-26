import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="movie-card-body">
      <Header />
      <MovieList movies={ card } />
    </div>
  );
}

export default App;
