import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (<Rating rating={ 3 } />);
  }
}

Rating.propTypes = {
  movies: PropTypes.shape({
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Rating;
