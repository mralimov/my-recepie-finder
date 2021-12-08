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
  const [addRecipeClicked, setAddRecipeClicked] = useState(false);
  // console.log(currentRecipeID);
  // console.log(allRecipes);

  const { get, loading } = useFetch(BASE_URL);

  //fetches specific recipe ingredients
  useEffect(() => {
    if (currentRecipeID != Number) {
      console.log(currentRecipeID);
      setCurrentRecipeIngredients(
        allRecipes.find((recipe) => recipe === currentRecipeID)
      );
    } else {
      get(`/${currentRecipeID}?key=${KEY}`)
        .then((data) => {
          const { recipe } = data.data;
          setCurrentRecipeIngredients(recipe);
          setRecipeViewClicked(true);
          // console.log(currentRecipeIngredients);
        })
        .catch((err) => console.log(err));
    }
  }, [currentRecipeID]);
  console.log(allRecipes);

  const recipeBookmarkHandler = (recipeID) => {
    let checkRecipe =
      bookmarks.filter((item) => item.id === recipeID).length <= 0;

    let bookmarkData = allRecipes.filter((item) => item.id === recipeID);

    if (checkRecipe) {
      setBookmarks((prevData) => [...prevData, ...bookmarkData]);
    } else {
      let filterBookmark = bookmarks.filter((item) => item.id !== recipeID);

      setBookmarks([...filterBookmark]);
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
    addRecipeClicked: [addRecipeClicked, setAddRecipeClicked],
  };
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
