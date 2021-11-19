import React, { useState } from 'react';
import StateContext from './state-context';

const StateProvider = (props) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [inputedName, setInputedName] = useState('');
  console.log(inputedName);
  console.log(allRecipes);
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
    setAllRecipes: [allRecipes, setAllRecipes],
    // bookmarks: bookmarks,
    // setBookmarks: setBookmarks,
    // toggleBookmark: bookmarkHandler,
    inputtedRecipeName: [inputedName, setInputedName],
  };
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
