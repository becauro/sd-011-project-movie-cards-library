import React, { Component } from 'react';
import Rating from '../components/Rating';

class MovieCard extends Component {
	render() {
		const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
		return (
			<div className='movie-card'>
				<img
					className='movie-card-image'
					src={imagePath}
					alt={`Filme: ${title}`}
				/>
				<h4 className='movie-card-title'>{title}</h4>
				<h5 className='movie-card-subtitle'>{subtitle}</h5>
				<p className='movie-card-storyline'>{storyline}</p>
				<div className='movie-card-rating'>
					<Rating rating={rating} />
				</div>
			</div>
		);
	}
}

export default MovieCard;
