import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    React.createElement('div',
      {
        className: 'App',
      }, React.createElement(Header, null),
      React.createElement(MovieList, {
        movies: data,
      }))
  );
}

export default App;
