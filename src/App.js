import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const moviesArray = [
    {title: 'Opa', subtitle: 'Ferrou', storyline: 'Ficamos sem', imagePath: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg', rating: 7}
  ]

  return (
    <div className="App">
      <Header />
      <MovieList movies={moviesArray}/>
    </div>
  );
}

export default App;
