import React from 'react';
import MovieCard from './MovieCard'


class MovieList extends React.Component {
  render() {
    return(
      <div>
        {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
        {console.log(this.props.xablau)}
      </div>
      
    )
  }
}

export default MovieList
