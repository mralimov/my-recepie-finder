import React, { useState, useEffect } from 'react';
import StateContext from './state-context';
import { KEY, BASE_URL } from '../config';
import useFetch from '../useFetch/UseFetch';

const StateProvider = (props) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [userInputedName, setUserInputedName] = useState('');
  const [currentRecipeID, setCurrentRecipeID] = useState('');
  const [currentRecipeIngredients, setCurrentRecipeIngredients] = useState({});
  const [recipeViewClicked, setRecipeViewClicked] = useState(false);
  // console.log(currentRecipeID);
  // console.log(allRecipes);

  const { get, loading } = useFetch(BASE_URL);

  useEffect(() => {
    get(`/${currentRecipeID}?key=${KEY}`)
      .then((data) => {
        const { recipe } = data.data;
        setCurrentRecipeIngredients(recipe);
        setRecipeViewClicked(true);
        // console.log(currentRecipeIngredients);
      })
      .catch((err) => console.log(err));
  }, [currentRecipeID]);
  // console.log(allRecipes);

  const recipeBookmarkHandler = (recipeID) => {
    let checkRecipe =
      bookmark.filter((item) => item.id === currentRecipe).length <= 0;

    let bookmarkData = recipe.filter((item) => item.id === currentRecipe);

    if (checkRecipe) {
      setBookmark((prevData) => [...prevData, ...bookmarkData]);
    } else {
      let filterBookmark = bookmark.filter((item) => item.id !== currentRecipe);

      setBookmark([...filterBookmark]);
    }
  };
  const stateContext = {
    allRecipes: allRecipes,
    currentRecipeName: userInputedName,
    allRecipiesState: [allRecipes, setAllRecipes],
    setCurrentRecipeID: [currentRecipeID, setCurrentRecipeID],
    currentRecipeIngredients: [
      currentRecipeIngredients,
      setCurrentRecipeIngredients,
    ],
    recipeViewClicked: recipeViewClicked,
    bookmarks: bookmarks,
    setBookmarks: [bookmarks, setBookmarks],
    toggleBookmark: recipeBookmarkHandler,
    inputtedRecipeName: [userInputedName, setUserInputedName],
    // findCurrentIngredients: findCurrentRecipeIngredients,
  };
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
