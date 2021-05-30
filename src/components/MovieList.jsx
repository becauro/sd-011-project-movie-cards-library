// implement MovieList component here

// https://stackoverflow.com/questions/59038307/reactjs-proptypes-validation-for-array-of-objects
// https://www.youtube.com/watch?v=tBweoUiMsDg
// https://app.betrybe.com/course/live-lectures/sd-cohort-11#aula-111-introducao-react
// https://pt-br.reactjs.org/docs/lists-and-keys.html
// https://www.digitalocean.com/community/tutorials/how-to-customize-react-components
// -with-props-pt#:~:text=Adicionando%20props,depois%20em%20seu%20componente%20AnimalCard%20.
// https://app.betrybe.com/course/live-lectures/sd-cohort-7#aula-112-react-componentes-react

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [],
};
