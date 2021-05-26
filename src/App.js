import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Data } />
      <MovieCard />
    </div>
  );
}

export default App;
