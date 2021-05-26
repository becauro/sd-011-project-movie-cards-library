import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title } } = this.props;
    return (
      <h4>{title}</h4>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
