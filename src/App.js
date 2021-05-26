import React, { Component } from 'react';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import films from './data';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieList movies={ films } />
      </>
    );
  }
}

export default App;
