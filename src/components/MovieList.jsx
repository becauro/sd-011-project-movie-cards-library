// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const parametros = this.props;
    const listMovies = parametros.movies;
    return listMovies.map((element) => {
      console.log(element.title);
      return (<MovieCard key={ element.title } movie={ element } />);
    });
  }
}

MovieList.propTypes = {
  movies: PropTypes.string,
};

MovieList.defaultProps = {
  movies: 'Filme',
};

export default MovieList;
