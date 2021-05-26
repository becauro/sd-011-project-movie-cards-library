import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieData from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ MovieData } />
    </div>
  );
}

export default App;
