// implement Rating component here
import React from 'react';
import '../componentsStyles/Rating.css';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <div>
          { rating }
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: undefined,
};

export default Rating;
