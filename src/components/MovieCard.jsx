// implement MovieCard component here
import React from 'react';
import '../componentsStyles/MovieCard.css';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { title } = movies;
    const { subtitle } = movies;
    const { storyline } = movies;
    const { rating } = movies;
    const { index } = this.props;
    const { imagePath } = movies;
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
