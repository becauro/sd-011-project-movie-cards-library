import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map(value => <MovieCard movie={ value } key={ value.title } />)}
      </div>
    );
  }
}

// MovieList.protoType = {
//   movie: PropTypes.string,
// };

export default MovieList;
