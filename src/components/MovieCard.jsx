import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { movie: {title, imagePath, subtitle, storyline} } = this.props;

    return (
      <div>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
  subtitle: PropTypes.string,
};

MovieCard.defaultProps = {
  img: '',
  title: '',
  storyline: '',
  subtitle: '',
};
