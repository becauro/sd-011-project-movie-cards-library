import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import Movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ Movies } />
      </div>
    );
  }
}

export default App;
