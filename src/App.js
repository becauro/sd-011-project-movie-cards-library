import React from 'react';
import './App.css';
import Header from './components/Header'
import MovieList from './components/MovieList'
import data from './data';

// import MovieList from './components/MovieCard'
// import MovieList from './components/Rating'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
