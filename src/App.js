import './App.css';
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import moviesData from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ moviesData } />
      </div>
    );
  }
}

export default App;
