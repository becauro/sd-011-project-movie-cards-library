import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

// References:
// Typechecking: https://reactjs.org/docs/typechecking-with-proptypes.html
// What is Props? http://lucasmaiaesilva.com.br/guia-de-bolso-react/chapter/props.html

MovieList.propTypes = {
  movies: propTypes.instanceOf(Array).isRequired,
};

export default MovieList;
