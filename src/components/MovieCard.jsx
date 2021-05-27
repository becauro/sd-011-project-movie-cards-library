// implement MovieCard component here
import React from 'react';
import '../componentsStyles/MovieCard.css';
import PropTypes from 'prop-types';

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
        <div className="Ratings">
          <p>{ rating }</p>
        </div>
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  index: PropTypes.number,
  imagePath: PropTypes.string,
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  index: PropTypes.number,
};
export default MovieCard;
