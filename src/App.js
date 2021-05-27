import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

const movies = [
  {
    title: 'Final Fantasy Spirits Within',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
  },
  {
    title: 'Kingsglave Final Fantasy XV',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  },
  {
    title: 'Ghost In The Shell',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    rating: 3,
    imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
