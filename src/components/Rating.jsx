import React, { Component } from 'react'


class Rating extends Component {
  render() {
    return (
      <div className='rating'>
        {this.props.rating}
      </div>
    )
  }
}

export default Rating