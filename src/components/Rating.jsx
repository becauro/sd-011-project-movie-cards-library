// implement Rating component here
import React from 'react';

export default class Rating extends React.Component {
  render() {
    return <div className='rating'>{ this.props.rating }</div>;
  }
}
