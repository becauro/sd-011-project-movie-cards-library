import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const cards = this.props.movies;

    return (
      <div className="conteiner-cards">
        {cards.map((item, index) => <MovieCard movies={ item } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
