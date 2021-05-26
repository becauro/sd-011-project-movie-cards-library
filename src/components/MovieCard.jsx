import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map(({ title, subtitle, storyline, rating, imagePath }, index) => (
        <div key={ index }>
          <img src={ imagePath } alt="film" />
          <h2>{ title }</h2>
          <h3>{ subtitle }</h3>
          <p>{ storyline }</p>
          <div>
            {rating}
          </div>
        </div>))
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
