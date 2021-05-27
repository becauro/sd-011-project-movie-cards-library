// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

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

Movielist.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

Movielist.defaultProps = {
  movies: [],
};

export default Movielist;
