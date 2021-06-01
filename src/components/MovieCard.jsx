// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      subtitle,
      storyLine,
      imagePath,
      // rating,
    },
    } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <img className="movie-card-image" src={ imagePath } alt="ImageMovie" />
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyLine }</p>
          {/* {<Rating rating={ rating } />} */}
        </section>
      </div>

    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyLine: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Nome do Filme',
    subtitle: 'Subtítulo',
    storyline: 'Sinopse',
    imagePath: 'Imagem',
    rating: 'Nota',
  },
};

export default MovieCard;
