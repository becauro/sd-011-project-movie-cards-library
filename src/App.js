import React from 'react';
import './App.css';
import Heade from './components/Header';
import MovieLis from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Heade />
      <MovieLis movies={ data } />
    </div>
  );
}

export default App;
