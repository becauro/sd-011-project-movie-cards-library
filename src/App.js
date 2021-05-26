import React from 'react';
import './App.css';
import Header from './components/Header';
import Data from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <ul>
          <MovieList movies={ Data } />
        </ul>
      </body>
    </div>
  );
}

export default App;
