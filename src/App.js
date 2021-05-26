import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import filmes from './data';

export class App extends Component {
  render() {
    return (
      <div>
        <Header className="header" />
        <MovieList className="movie-list" movies={ filmes } />
      </div>
    );
  }
}

export default App;
