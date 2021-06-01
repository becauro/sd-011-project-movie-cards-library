// implement MovieCard component here

// https://stackoverflow.com/questions/59038307/reactjs-proptypes-validation-for-array-of-objects
// https://www.youtube.com/watch?v=tBweoUiMsDg
// https://app.betrybe.com/course/live-lectures/sd-cohort-11#aula-111-introducao-react
// https://pt-br.reactjs.org/docs/lists-and-keys.html
// https://www.digitalocean.com/community/tutorials/how-to-customize-react-components
// -with-props-pt#:~:text=Adicionando%20props,depois%20em%20seu%20componente%20AnimalCard%20.
// https://app.betrybe.com/course/live-lectures/sd-cohort-7#aula-112-react-componentes-react
// https://app.betrybe.com/course/live-lectures/sd-cohort-8#plantao-especial-proptypes
// Em estudos com o colega Nykolas Silva

import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
    },
    } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <img className="movie-card-image" src={ imagePath } alt="ImageMovie" />
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <Rating rating={ rating } />
        </section>
      </div>

    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
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
