import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: {title, subtitle, storyline, rating } } = this.props;
    return (
      <div>
        <li>{ title }</li>
        <li>{ subtitle }</li>
        <li>{ storyline }</li>
        <li>{ rating }</li>
      </div>
    );
  }
}

export default MovieCard;
