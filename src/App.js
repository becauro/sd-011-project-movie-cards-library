import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import ListMovies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ ListMovies } />
      </div>
    );
  }
}

export default App;
