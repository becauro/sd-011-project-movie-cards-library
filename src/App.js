import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import films from './data';

class App extends React.Component {
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
