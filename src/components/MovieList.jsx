// implement MovieList component here
import React from 'react';
import movies from '../data';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyLine, rating, imagePath } = this.props.movies;
    return (
      <div>
        { movies.map((item) => (
          <p>{ item.title }</p>
        )) }
      </div>
    );
  }
}
export default MovieList;
