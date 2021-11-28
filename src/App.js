import React, { useEffect, useContext } from 'react';
import Header from './components/header/Header';
import './App.scss';
import SearchResult from './components/searchResults/SearchResult';
import Recipe from './components/recipe/Recipe';
import StateProvider from './components/state-context/StateProvider';
import AddRecipe from './components/header/AddRecipe';

const App = () => {
  return (
    <StateProvider>
      <Header />
      <SearchResult />
      <Recipe />
      <AddRecipe />
    </StateProvider>
  );
};

export default App;
