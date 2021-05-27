import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList className="movie-list" movies={ Data } />
      </div>
    );
  }
}

export default App;
