import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (

      movies.map(({ imagePath, title, subtitle, storyline }) => (
        <div className="movie-card" key={ title }>
          <MovieCard
            key={ title }
            img={ imagePath }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
          />
        </div>
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(),
};

MovieList.defaultProps = {
  movies: [],
};
