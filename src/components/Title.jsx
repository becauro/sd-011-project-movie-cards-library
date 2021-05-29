import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { filme } = this.props;
    const { title } = filme;
    return { title };
  }
}

Title.defaultProps = {
  filme: [],
};

Title.propTypes = {
  filme: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Title;
