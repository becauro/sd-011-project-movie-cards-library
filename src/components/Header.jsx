// 1 - Crie um componente <Header />
// 2 - Renderize um texto no <Header /> (dentro de uma tag h1)

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
