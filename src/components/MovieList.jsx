import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item) => (
          <MovieCard movie={ item } key={ item.title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [{}],
};

export default MovieList;
