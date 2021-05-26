import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

// References:
// What is Props? http://lucasmaiaesilva.com.br/guia-de-bolso-react/chapter/props.html
// Typechecking with PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
// Typechecking by Steven Paulino: https://medium.com/@stevenpaulino1/typechecking-with-react-proptypes-6c8f46d78b8a

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
