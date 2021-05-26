import React, { Component } from 'react'
import MovieCard from './MovieCard'

class MovieList extends Component {
  render() {
    const listaFilmes = this.props.listaDeFilmes;
    
    return (
      <div>
        {listaFilmes.map((filme, index) => <MovieCard movie = {filme} key = {index} />)}
      </div>
    )
  }
}

export default MovieList