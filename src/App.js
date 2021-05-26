import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList
        movies={ movies.map((movie, index) => (
          <MovieCard key={ index }>
            { movie.title }
            movie=
            { movie }
          </MovieCard>)) }
      />
    </div>
  );
}

export default App;
