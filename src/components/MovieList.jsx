import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((item) => <MovieCard movies={ item } key={ item.title }/>) }
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.shape(),
};

MovieList.defaultProps = {
  movies: {},
};
