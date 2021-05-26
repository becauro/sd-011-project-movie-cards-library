import React, { Component } from 'react';
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';


class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    // console.log(movies);


    return(
      <div>
        { movies.map(movie => <MovieCard key={movie.title} movie={movie} />) }
      </div>  
    )
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}
