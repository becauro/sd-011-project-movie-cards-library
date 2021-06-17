import React, { Component } from 'react';
import MovieCard from './MovieCard';

/* title, subtitle, storyline, imagePath e rating */

class MovieList extends Component {
  render() {
    return (
      <div>
        <MovieCard movie={ movie } key="Movie Title 1" />
        <MovieCard movie={ movie } key="Movie Title 2" />
        <MovieCard movie={ movie } key="Movie Title 3" />
      </div>
    );
  }
}

export default MovieList;
