import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import MovieList from './components/MovieList.jsx'
import Movies from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={Movies} />
    </div>
  );
}

export default App;
