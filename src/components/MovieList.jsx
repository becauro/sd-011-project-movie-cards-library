import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() { 
    const [movies] = this.props;
    return (
      <div>
        { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
      </div>
    );
  }
}
// Ajuda do Luiz na sala "A"

MovieList.PropTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired
}

export default MovieList;