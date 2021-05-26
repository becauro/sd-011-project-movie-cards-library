// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    p.className = 'rating';
    return (
      <p>{ rating }</p>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number.isRequired, // cause rating is a number
};

export default Rating;
