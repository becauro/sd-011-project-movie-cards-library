import React from 'react';
import './App.css';
import MovieList from './components/MovieList.jsx';
import Header from './components/Header.jsx';
import data from './data.js'

function App() {
  return (
    <div>
      <Header />
    <div className="body movie-list">
      <MovieList movies={data} />
    </div>
    </div>
  );
}

export default App;
