import React from 'react';
import './App.css';
import Headers from './components/Header';
import MovieLists from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      <Headers />
      <MovieLists movies={ data } />
    </div>
  );
}

export default App;
