import React from 'react';

const rating = this.props.movie;
class Rating extends React.Component {
  render() {
    return (
      <div>
        {`Rating: ${rating.value}`}
      </div>
    );
  }
}

export default Rating;
