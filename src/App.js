import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import SearchResult from './components/searchResults/SearchResult';
import Recipe from './components/recipe/Recipe';
import StateProvider from './components/state-context/StateProvider';

const App = () => {
  return (
    <StateProvider>
      <Header />
      <SearchResult />
      <Recipe />
    </StateProvider>
  );
};

export default App;
