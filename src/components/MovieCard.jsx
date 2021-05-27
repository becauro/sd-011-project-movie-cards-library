import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {

render(){
    const movie = this.props;
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return(
        <div className = "Movie-Card">
            <img src={ imagePath }/>
            <h4>{ title }</h4>
                <h5>{ subtitle }</h5>
                <p>{ storyline }</p>
            <Rating>{ rating }</Rating>
        </div>
    )
  }
}


export default MovieCard;