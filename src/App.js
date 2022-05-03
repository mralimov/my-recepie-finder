import React, { useEffect } from 'react';
import Header from './components/header/Header';
import './App.scss';
import SearchResult from './components/searchResults/SearchResult';
import Recipe from './components/recipe/Recipe';
import AddRecipe from './components/header/AddRecipe';
import RecipeProvider from './components/state-context/RecipeProvider';

const App = () => {
  return (
    <RecipeProvider>
      <Header />
      <SearchResult />
      <Recipe />
      <AddRecipe />
    </RecipeProvider>
  );
};

export default App;
