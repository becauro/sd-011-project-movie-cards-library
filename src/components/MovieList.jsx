import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieCard />
        { movies }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({}).isRequired,
};

export default MovieList;
