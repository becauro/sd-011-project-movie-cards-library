import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div className="list">
        { this.props.movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
