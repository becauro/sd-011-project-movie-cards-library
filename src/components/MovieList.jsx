// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

export default class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return movies.map((movieData) => {
      return <MovieCard key = { movieData.title } movie = { movieData } />
    })
  }
}