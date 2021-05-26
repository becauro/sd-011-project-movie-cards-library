import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((el) => (
          <MovieCard key={ el.title } movie={ el } />
        ))}
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [
    {
      title: 'Missing Title',
      subtitle: 'Missing Subtitle',
      storyline: 'Missing Storyline',
      imagePath: 'Missing imagePath',
      rating: 'Missing rating',
    },
  ],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
