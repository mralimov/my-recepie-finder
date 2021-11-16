import { createContext } from 'react';

const StateContext = createContext({
  allRecipes: [],
  bookmarks: [],
  toggleBookmark: (currentRecipeId) => {},
  inputtedRecipeName: '',
});

export default StateContext;
