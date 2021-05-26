import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />

      <MovieList listaDeFilmes={ Data } />

    </div>
  );
}

export default App;
