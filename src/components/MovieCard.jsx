import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { filme } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = filme;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <span>{ rating }</span>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  filme: [],
};

MovieCard.propTypes = {
  filme: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
