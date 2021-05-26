import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import data from '../data'

class MovieList extends Component {

  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item, index) => {
          return <MovieCard movie={ item } key={ movies.title }/>
        })}
      </div>
    )
  }
}

export default MovieList;
