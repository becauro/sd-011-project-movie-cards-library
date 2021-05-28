import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div className={'movie-card movie-card-body'}>
      <img className={'movie-card-image'} src={ this.props.movie.imagePath } alt=''/>
      <h4 className={'movie-card-title'}>{ this.props.movie.title }</h4>
      <h5 className={'movie-card-subtitle'}>{ this.props.movie.subtitle }</h5>
      <p className={'movie-card-storyline'}>{ this.props.movie.storyline }</p>
      <div className={'movie-card-rating'}>
      <Rating rating={ this.props.movie.rating } />
      </div>
      </div>
      )
    }
  }   
  
  MovieCard.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number
  };

  export default MovieCard;
  
