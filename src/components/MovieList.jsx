import React from 'react';
import MovieCard from './MovieCard';

const { movies } = this.props;
class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((item) => (<MovieCard movie={ item } key={ item.title } />
        ))}
      </div>
    );
  }
}

export default MovieList;
