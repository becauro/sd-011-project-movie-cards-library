// implement MovieList component here
// implement MovieCard component here
import React from 'react';
import MovieCard from './MovieCard';
import propTypes from 'prop-types';

class Movielist extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        imagePath: PropTypes.string,
    })),
};

export default Movielist;

