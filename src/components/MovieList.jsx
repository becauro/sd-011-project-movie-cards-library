// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';
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

MovieList.defaultProps = {
  movies: 'Stranger',
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
