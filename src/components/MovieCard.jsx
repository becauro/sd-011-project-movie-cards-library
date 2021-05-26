import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props;
    return (
      <div>
        <img src={imagePath} alt={title} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
      </div>
    );
  }
}
export default MovieCard;
