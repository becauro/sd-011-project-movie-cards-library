// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// 3 - Crie um componente <MovieList /> (deve receber uma prop movies)
// 4 - Renderize componentes <MovieCard /> dentro de <MovieList /> (recebido na prop movies)
// 5 - Passe uma key para cada <MovieCard /> renderizado (utilizar a função map) e cada componente <MovieCard /> deve receber uma prop key

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};
MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
