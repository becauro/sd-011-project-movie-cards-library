// implement MovieCard component here
import propTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <section className="movie-card-section">
          <h4 className="movie-card-title">{ title }</h4>
          <img className="movie-card-image" src={ imagePath } alt="ImageMovie" />
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-paragraph">{ storyline }</p>
          <Rating rating={ rating } />
        </section>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'First',
    subtitle: 'Second',
    storyline: 'Third',
    imagePath: 'Fourth',
    rating: 1,
  },
};
