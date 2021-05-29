import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.filme;
    return (
      <li>
        { title }
        { subtitle }
        { storyline }
        { rating }
        { imagePath }
      </li>
    );
  }
}

export default MovieCard;
