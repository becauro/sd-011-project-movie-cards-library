import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const  { rating } = this.props;

    return <p>{rating}</p>
  }
}

export default Rating;

Rating.defaultProps = {
  rating: 0,
}

Rating.propTypes = {
  rating: PropTypes.number,
}
