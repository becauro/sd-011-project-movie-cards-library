import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import data from './data';

function App() {
  return (
    <div>
      <Header />
      <div className="body movie-list">
        <MovieList movies={ data } />
      </div>
    </div>
  );
}

export default App;
