import './App.css';
import React from 'react';

import movies from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header>
        <MovieList movies={ movies } />
      </Header>
    </div>
  );
}

export default App;
