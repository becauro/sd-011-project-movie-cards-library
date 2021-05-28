// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieC extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>
          { title }
        </h4>
        <h5>
          { subtitle }
        </h5>
        <img src={ imagePath } alt="" />
        <p>
          { storyline }
        </p>
        <p>
          <h4>Rating: </h4>
          { rating }
        </p>
      </div>
    );
  }
}
MovieC.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
export default MovieC;
