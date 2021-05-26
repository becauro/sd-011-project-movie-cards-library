import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        { rating }
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
Rating.deafultProps = {
  rating: 0,
};

export default Rating;
