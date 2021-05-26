import React from 'react';
import MovieCard from './MovieCard';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
        movies.map((item) => {
          return <div className = 'movie-container'>
            <MovieCard movie = {item} />
            <Rating score = {item.rating}/>
          </div>
        })
    );
  }
}

export default MovieList;
