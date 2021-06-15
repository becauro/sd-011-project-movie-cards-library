// 15 - Crie um componente <App />
// 16 - Renderize <MovieList /> dentro do componente <App />
// 17 - Adicione PropTypes a todos os componentes

import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

const App = () => (
  <div className="App">
    <Header />
    <MovieList movies={ movies } />
  </div>
);

export default App;
