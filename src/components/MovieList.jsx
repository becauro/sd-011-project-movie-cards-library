import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map(((anyMovie) => <MovieCard key={ anyMovie.title } />)) }
      </div>
    );
  }
}

/** A princípio, para resolver este requisito, recebi orientações do estudante
 * Tales Coelho, estudante da Turma 11 e que já havia terminado o projeto, de
 * como fazer a verificação de tipos.
 * Além disso, consultei esta Thread no Slack para entender melhor como utilizar.
 * Source: https://trybecourse.slack.com/archives/C01PLFW7347/p1622059737335700
 */

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
