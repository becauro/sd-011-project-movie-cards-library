import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ MovieCard } />
      </div>
    );
  }
}

export default App;
