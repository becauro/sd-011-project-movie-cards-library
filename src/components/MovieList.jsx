import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {

    const { movies } = this.props;

    return movies.map((element) => <MovieCard key={ element.title } movie={ element } />)
  }
}

export default MovieList;

MovieList.PropTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}
