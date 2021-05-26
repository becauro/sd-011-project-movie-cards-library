import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

// References:
// http://lucasmaiaesilva.com.br/guia-de-bolso-react/chapter/props.html

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
