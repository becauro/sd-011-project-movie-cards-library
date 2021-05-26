// implement Rating component here
import React from 'react'
import propTypes from 'prop-types'

class Rating extends React.Component {
  render() {
    return(
      <p className='rating'>{this.props.rating}</p>
    )
  }
}

Rating.propTypes = {
  rating: propTypes.number
};

export default Rating