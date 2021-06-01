import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import data from './data';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movies={ data } />
      </div>
    );
  }
}

export default App;
