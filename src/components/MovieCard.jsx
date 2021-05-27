// implement MovieCard component here
import React from 'react';
import '../componentsStyles/MovieCard.css';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { index } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    const classes = `${index} MovieCard`;

    return (
      <div className={ classes }>
        <div className="Image">
          <img src={ imagePath } alt={ title } />
        </div>
        <div className="Infos">
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
  index: PropTypes.number,
};

MovieCard.defaultProps = {
  // title: PropTypes.string,
  // subtitle: PropTypes.string,
  // storyline: PropTypes.string,
  // rating: PropTypes.number,
  // imagePath: PropTypes.string,
  index: undefined,
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};
export default MovieCard;
