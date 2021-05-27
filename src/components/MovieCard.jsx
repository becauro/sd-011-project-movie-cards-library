import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { title, img, subtitle, storyline } = this.props;

    return (
      <div>
        <img src={ img } alt="" />
        {title}
        {subtitle}
        {storyline}
      </div>
    );
  }
}

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
  subtitle: PropTypes.string,
};

MovieCard.defaultProps = {
  img: '',
  title: '',
  storyline: '',
  subtitle: '',
};
