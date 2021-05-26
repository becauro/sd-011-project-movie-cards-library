import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item, index) => (
          <MovieCard movie={item} key={index} />
        ))}
      </div>
    );
  }
}
export default MovieList;

// const { title, subtitle, storyline, imagePath } = this.props.movie;

MovieList.PropTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [],
};
