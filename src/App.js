import React from 'react';
import './App.css';
import header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <header />
      <MovieList movies={ MovieCard } />
    </div>
  );
}

export default App;
