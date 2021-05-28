import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

// 15 - Crie um componente <App /> (deve renderizar um componente <Header />)
// 16 - Renderize <MovieList /> dentro do componente <App /> (deve renderizar um componente <MovieList />) passando como prop movies a lista de filmes contida no arquivo data.js
// 17 - Adicione PropTypes a todos os componentes (Todos os componentes que recebem props devem ter suas proptypes corretamente declaradas)

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
