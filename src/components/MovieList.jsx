// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const obj = this.props.movies;
    return (
      <div className="MovieList">
        {obj.map((movie, index) => <MovieCard key={ `Movie Title ${index + 1} ` } movies={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
