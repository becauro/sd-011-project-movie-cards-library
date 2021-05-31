import React from 'react';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <header>
        <h1>Movie Cards.jsx</h1>
      </header>
    );
  }
}

// class MovieCard extends React.Component {
//   render() {
//     const { movies: { title, subtitle, storyLine, ImagePath, rating } } = this.props;
//     return (
//       <div>
//         <img src={ ImagePath } alt="Movie" />
//         <h4>{title}</h4>
//         <h5>{subtitle}</h5>
//         <p>{storyLine}</p>
//         <p>{rating}</p>
//       </div>
//     );
//   }
// }

// MovieCard.propTypes = {
//   movies: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyLine: PropTypes.string,
//     imagePath: PropTypes.img,
//     rating: PropTypes.number,
//   }),
// };

export default MovieCard;
