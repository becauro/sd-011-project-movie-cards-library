// implement MovieList component here
import React from 'react';
import movies from '../data';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyLine, rating, imagePath } = this.props.movies;

    return (
    <div>
      Título: {title} - Sub-Título: {subtitle} - Sinopse: {storyLine} - Nota: {rating} - Card: {imagePath}
    </div>);
  }
}
export default MovieList;
