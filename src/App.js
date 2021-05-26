import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Data from './data';
import Header from './components/Header';

function App() {
  return (
    <header className="App">
      <Header />
      <MovieList movies={ Data } />
    </header>
  );
}

export default App;
