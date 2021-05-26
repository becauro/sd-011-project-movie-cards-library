// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <li>
        {movie}
      </li>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default MovieCard;
