import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header title="Movie Cards Library" />
        <MovieList movies={ data.movies } />
      </main>
    );
  }
}

export default App;
