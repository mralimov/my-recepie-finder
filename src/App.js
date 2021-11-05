import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import './App.scss';
import SearchResult from './components/searchResults/SearchResult';
import Recipe from './components/recipe/Recipe';

const RecipeContext = createContext()

const App = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [bookmark, setBookmark] = useState([]);

  return (
    <>
      <Header
        recipeData={recipeData}
        bookmark={bookmark}
        recipeName={recipeName}
        setRecipeName={setRecipeName}
      />
      <SearchResult
        recipeName={recipeName}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
        setCurrentRecipe={setCurrentRecipe}
      />
      <Recipe
        recipe={recipeData}
        currentRecipe={currentRecipe}
        setBookmark={setBookmark}
        bookmark={bookmark}
        recipe={recipeData}
      />
    </>
  );
};

export default App;
