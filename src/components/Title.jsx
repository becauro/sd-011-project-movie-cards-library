import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { movie } = this.props;
    const { title } = movie;
    return (
      <h4 className="movie-card-title">{ title }</h4>
    );
  }
}

Title.defaultProps = {
  movie: [],
};

Title.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Title;
