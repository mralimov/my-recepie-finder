import React from 'react';
import StateContext from './state-context';

const StateProvider = (props) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const bookmarkHandler = (currentRecipe) => {
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
    setAllRecipes: setAllRecipes,
    bookmarks: bookmarks,
    setBookmarks: setBookmarks,
    toggleBookmark: bookmarkHandler,
    inputtedRecipeName: '',
  };
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
