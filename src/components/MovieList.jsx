// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // Funciona
    // if (movies !== undefined) {
    //   for (let index in movies) {
    //     movies[index] =  <MovieCard />;
    //   }
    // }

    // return (<div>{movies}</div>); // Funciona
    return (movies.map((card) => (<MovieCard key={ card.title } movie={ card } />)));
    // return this.props.movies.map((card) => <MovieCard key={ card.title } movie={ card } />); // Funciona

    // return {this.props.movies.map((card) => <MovieCard key={ card.title } movie={ card } />)}
  }
}

export default MovieList;
