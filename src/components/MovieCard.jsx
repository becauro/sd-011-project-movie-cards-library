import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import SubTitle from './Title';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <Title />
          <SubTitle />
          <p>{ storyline }</p>
        </div>
        <span>{ rating }</span>
      </section>
    );
  }
}

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
