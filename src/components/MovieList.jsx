import React from 'react'
import MovieCard from './MovieCard'
import movies from '../data';
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return(
      <div>
        {movies.map((card, index) => (<MovieCard movie={card} key={index} />))}
      </div>   
    );
  }
}

export default MovieList;
