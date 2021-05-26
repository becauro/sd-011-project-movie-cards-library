import React, { Component } from 'react';
import MovieCard from 'MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const [{ title, subtitle, storyline, rating, imagePath }] = this.props.movies;

    return (
      <div>
        {this.props.movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
