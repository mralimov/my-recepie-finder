import { createContext } from 'react';

const RecipeContext = createContext({
  allRecipies: [],
  bookmarks: [],
  userInputedName: '',
  currentRecipeID: '',
  currentRecipeIngredients: {},
  recipeViewClicked: false,
  addRecipeClicked: false,
  toggleBookmark: (recipeId) => {},
});

export default RecipeContext;
