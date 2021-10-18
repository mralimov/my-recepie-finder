import React from 'react';
import Header from './header/Header';
import './App.scss';
import SearchResult from './searchResults/SearchResult';
import Recipe from './recipe/Recipe';
const App = () => {
  return (
    <div className='container'>
      <Header />
      <SearchResult />
      <Recipe />
    </div>
  );
};

export default App;
