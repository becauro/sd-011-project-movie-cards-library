// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies }
      </div>);
  }
}
MovieList.propTypes = {
  movies: PropTypes.isRequired,
};
export default MovieList;
