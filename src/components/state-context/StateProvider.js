import React from 'react';
import StateContext from './state-context';

const StateProvider = (props) => {
  const addBookmarkHandler = () => {};

  const getAllRecipesHandler = (recipeId) => {};
  const stateContext = {
    allRecipes: [],
    bookmarks: [],
    currentRecipeId: '',
    inputtedRecipeName: '',
  };
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
