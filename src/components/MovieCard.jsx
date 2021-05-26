import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyLine, imagePath, rating } = movie;
    return (
      <div>
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
