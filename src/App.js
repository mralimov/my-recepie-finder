import React, { useState } from 'react';
import Header from './header/Header';
import './App.scss';
import SearchResult from './searchResults/SearchResult';
import Recipe from './recipe/Recipe';

const App = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeData, setRecipeData] = useState([]);

  return (
    <>
      <Header recipeName={recipeName} setRecipeName={setRecipeName} />
      <SearchResult
        recipeName={recipeName}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      <Recipe recipe={recipeData} />
    </>
  );
};

export default App;
