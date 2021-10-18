import React from 'react';
import Header from './header/Header';
import './App.scss';
import SearchResult from './searchResults/SearchResult';
import Recipe from './recipe/Recipe';

const App = () => {
  return (
    <>
      <Header />
      <SearchResult />
      <Recipe />
    </>
  );
};

export default App;
