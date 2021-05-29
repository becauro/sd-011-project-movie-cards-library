import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p className="movie-card-rating">
          <span className="rating">{ rating }</span>
        </p>
      </div>
    );
  }
}

export default Rating;

Rating.defaultProps = {
  rating: 1,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
