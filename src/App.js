import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MoviesData from './data.js'; 
function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={MoviesData}/>
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
