import React, { useState, useEffect } from 'react';
import RecipeContext from './RecipeContext';
import { KEY, BASE_URL } from '../config';
import useFetch from '../useFetch/UseFetch';

const RecipeProvider = (props) => {
  const { get, loading } = useFetch(BASE_URL);

  const toggleBookmarkHandler = (recipeId) => {};

  const stateContext = {
    allRecipies: [],
    bookmarks: [],
    userInputedName: '',
    currentRecipeID: '',
    currentRecipeIngredients: {},
    recipeViewClicked: false,
    addRecipeClicked: false,
    toggleBookmark: toggleBookmarkHandler,
  };
  // fetches specific recipe ingredients
  useEffect(() => {
    if (/^\d+$/.test(stateContext.currentRecipeID)) {
      console.log(stateContext.currentRecipeID);
      const findCurrentRecipe = allRecipes.find(
        (recipe) => recipe.id === stateContext.currentRecipeID
      );
      console.log(findCurrentRecipe);
      stateContext.recipeViewClicked(true);
      return stateContext.currentRecipeIngredients(findCurrentRecipe);
    }
    get(`/${stateContext.currentRecipeID}?key=${KEY}`)
      .then((data) => {
        const { recipe } = data.data;

        stateContext.currentRecipeIngredients(recipe);
        stateContext.recipeViewClicked(true);
      })
      .catch((err) => console.log(err));
  }, [stateContext.currentRecipeID]);

  return (
    <RecipeContext.Provider value={stateContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
