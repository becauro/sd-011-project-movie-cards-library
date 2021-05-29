/* eslint-disable react/prop-types */
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movies } = this.props;
    return (
      // eslint-disable-next-line react/prop-types
      <ul>
        { movies.map((movie, index) => <MovieCard key={ index } filme={ movie } />)}
      </ul>
    );
  }
}

// MoveList.propTypes = {
// };
export default MovieList;
