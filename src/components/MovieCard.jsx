import React from 'react';

class MovieCards extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.data;
    return (
      <div className="movie-card-header">
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        < Rating rating={rating} />
      </div>);
  };
};
export default MovieCards;
