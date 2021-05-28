// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

// 11 - Crie um componente <Rating />
// 12 - Renderize a nota de um filme dentro de Rating (dentro de um elemento com a classe rating)
// 14 - Passe como prop para o componente <Rating /> o atributo rating

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}</div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
