import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <ol>
        <MovieCard />
        <li>ae</li>
      </ol>
    );
  }
}

// MovieList.protoType = {
//   movie: PropTypes.string,
// };

export default MovieList;
