import React, { useState } from 'react';
import StateContext from './state-context';

const StateProvider = (props) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [userInputedName, setUserInputedName] = useState('');
  const [currentRecipeID, setCurrentRecipeID] = useState('');
  const [currentRecipeIngredients, setCurrentRecipeIngredients] = useState({});
  console.log(currentRecipeID);
  // console.log(allRecipes);

  const findCurrentRecipeIngredients = (recipeID) => {
    const itemFind = allRecipes.filter((item) => item.id === recipeID);

    return itemFind;
  };

  // console.log(allRecipes);
  // const bookmarkHandler = (currentRecipe) => {
  //   let checkRecipe =
  //     bookmark.filter((item) => item.id === currentRecipe).length <= 0;

  //   let bookmarkData = recipe.filter((item) => item.id === currentRecipe);

  //   if (checkRecipe) {
  //     setBookmark((prevData) => [...prevData, ...bookmarkData]);
  //   } else {
  //     let filterBookmark = bookmark.filter((item) => item.id !== currentRecipe);

  //     setBookmark([...filterBookmark]);
  //   }
  // };
  const stateContext = {
    allRecipes: allRecipes,
    currentRecipeName: userInputedName,
    allRecipiesState: [allRecipes, setAllRecipes],
    setCurrentRecipe: [currentRecipeID, setCurrentRecipeID],
    currentRecipeIngredients: [
      currentRecipeIngredients,
      setCurrentRecipeIngredients,
    ],
    // bookmarks: bookmarks,
    // setBookmarks: setBookmarks,
    // toggleBookmark: bookmarkHandler,
    inputtedRecipeName: [userInputedName, setUserInputedName],
    findCurrentIngredients: findCurrentRecipeIngredients,
  };
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
