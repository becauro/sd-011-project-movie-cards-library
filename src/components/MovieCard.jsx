import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class MovieCard extends React.Component {
  render() {
    const { filme } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = filme;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt={ title } />
        <div className="movie-car-body">
          <Title />
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
        <span>{ rating }</span>
      </section>
    );
  }
}

MovieCard.defaultProps = {
  filme: [],
};

MovieCard.propTypes = {
  filme: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
