import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';
import MovieCard from './components/MovieCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movie={ Data } />
        <MovieCard />
      </div>
    );
  }
}
export default App;
