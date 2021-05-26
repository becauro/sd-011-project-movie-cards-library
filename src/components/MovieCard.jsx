// implement MovieCard component here
import propTypes from 'prop-types';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <div>
        <section>
          <h4>{ title }</h4>
          <img src={ imagePath } alt="ImageMovie" />
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </section>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'First',
    subtitle: 'Second',
    storyline: 'Third',
    imagePath: 'Fourth',
  },
};
