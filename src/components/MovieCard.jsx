// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    // eslint-disable-next-line
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <content />
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
