import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieData from './data';

function App() {
  return (
    <div className="App">
      <MovieList movies={ MovieData } />
    </div>
  );
}

export default App;
