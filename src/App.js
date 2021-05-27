import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="movie-list">
          <MovieList className="movie-list" movies={ data } />
        </div>
      </div>
    );
  }
}

export default App;
