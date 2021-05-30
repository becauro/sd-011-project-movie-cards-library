// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // .map retona para o componente PAI (App.js) um array de elementos com dados que recebeu de lá via prop ("movies").
    // .map também usado para passar, via prop ("movie"), para um comnponente FILHO (MovieCard), cada objeto
    const { movies } = this.props;
    return (movies.map((card) => (<MovieCard key={ card.title } movie={ card } />)));
  }
}

MovieList.defaultProps = {
  movies: 'Stranger',
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
