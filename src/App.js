import React from 'react';
import './App.css';
import Movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      {/* Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
      <Header />
      <MovieList movies={ Movies } />
    </div>
  );
}

export default App;
