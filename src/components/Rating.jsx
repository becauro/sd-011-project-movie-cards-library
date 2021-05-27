// implement Rating component here !
import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

Rating.ṕropTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 1,
};

export default Rating;
