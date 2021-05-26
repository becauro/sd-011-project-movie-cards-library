import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Data } />
      <Rating rating={ Data } />
    </div>
  );
}

export default App;
