import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
};

MovieCard.defaultProps = {
  imagePath: 'images/movie_1',
  title: 'Movie Title 1',
  subtitle: 'Movie Subtitle 1',
  storyline: 'Movie Storyline 1',
};

export default MovieCard;
