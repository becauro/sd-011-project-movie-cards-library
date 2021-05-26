import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieContainer from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieContainer />
    </div>
  );
}

export default App;
