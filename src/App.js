import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import array from './data'; // Acredito que o mais  correto seria importar como "movies". Se tivesse mais de dois arrays exportados, darai treta.
// Oi, tudo bem ? Bye
function App() {
  // [PODERIA passar para a prop de MovieList um outro Array, como o do exemplo criado abaixo]

  // const array = [
  //   { title: 'Appleseed Alpha',
  //     imagePath: 'images/Appleseed_Alpha.jpg', // ACHO que começa por imagens/ porque é sob a pespectiva do caminho a partir do arquivo public/index.html
  //     rating: 5 },
  //   { title: 'Final Fantasy Spirits Within',
  //     imagePath: '../public/images/Final_Fantasy_Spirits_Within.jpg',
  //     rating: 7 },
  // ];

  // Abaixo (dentro de return), também temos um componente filho que recebe dados de um array via props "movies".
  // Ao mesmo tempo o componente filho (MovieList) é renderizado.
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      <Header />
      <MovieList movies={ array } />
    </div>
  );
}

export default App;
