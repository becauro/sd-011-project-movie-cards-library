import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { movie } = this.props;
    const { subtitle } = movie;
    return (
      <h5 className="movie-card-subtitle">{ subtitle }</h5>
    );
  }
}

SubTitle.defaultProps = {
  movie: {},
};

SubTitle.propTypes = {
  movie: PropTypes.shape({
    subtitle: PropTypes.string,
  }),
};

export default SubTitle;
