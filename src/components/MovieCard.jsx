import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyLine, rating } = movie;

    return (
      <div>
        <img src={ imagePath }/>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyLine }</p>
        <p>{ rating }</p>
        <hr></hr>
      </div>
    );
  }
}

export default MovieCard;
