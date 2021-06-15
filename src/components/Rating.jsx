// 11 - Crie um componente <Rating />
// 12 - Renderize a nota de um filme dentro de Rating
// 14 - Passe como prop para o componente <Rating /> o atributo rating

import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <div className="rating">{ rating }</div>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
