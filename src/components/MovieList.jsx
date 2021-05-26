import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.string,
  }).isRequired,
};

export default MovieList;
