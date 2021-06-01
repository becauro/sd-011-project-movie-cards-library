import React from 'react';
import movies from '../data'
import MovieCard from './MovieCard'

class Rating extends React.Component {
  render() {
    const { rating } = this.props
    return (
      <div className='rating'>
        {rating}
      </div>
    )
  }
  
}

export default Rating;
