import React, { Component } from 'react';
import MovieCard from './MovieCard';


export default class MovieList extends Component {
  render() {
    return (
      this.props.movies.map((movie) => {
        return (
          <div className="movie-card">
            <MovieCard
            img = {movie.imagePath}
            title = {movie.title}
            subtitle= {movie.subtitle}
            storyline = {movie.storyline}
            />
          </div>
        )
      })
    );
  }
}
