// 15 - Crie um componente <App />
// 16 - Renderize <MovieList /> dentro do componente <App />

import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const App = () => (
  <div className="App">
    <Header />
    <MovieList />
  </div>
);

export default App;
