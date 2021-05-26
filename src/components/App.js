import React, { Component } from 'react';
import movies from '../data';
import Header from './Header';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}
export default App;
