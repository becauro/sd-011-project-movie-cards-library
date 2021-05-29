import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

function App() {
  const array = [
    { title: 'Appleseed Alpha',
      imagePath: '../public/images/Appleseed_Alpha.jpg' },
    { title: 'Final_Fantasy_Spirits_Within.jpg',
      imagePath: '../public/images/Final_Fantasy_Spirits_Within.jpg' },
    { title: 'Ghost In The Shell 2_0',
      imagePath: '../public/images/Ghost_In_The_Shell_2_0.jpg' },
    { title: 'Kingsglaive Final Fantasy XV',
      imagePath: '../public/images/Kingsglaive_Final_Fantasy_XV.jpg' },
    { title: 'Resident Evil Vendetta',
      imagePath: '../public/images/public/images/Resident_Evil_Vendetta.jpg' },
  ];

  // {products.map((item) => (<Order order={item} />))}

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
